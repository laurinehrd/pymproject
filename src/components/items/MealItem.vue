<template>
  <div class="content">
    <div class="meal-item">
      <div class="name-meal">
        <img
            class="img-default"
            src="assets/pym-logo-imgdefault.png"
            alt="img default">
        <p class="name">{{ meal.name }}</p>
      </div>
      <div class="icon-action">
        <svg @click="showIngredients()" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.667 14s-3.5 7-11.667 7c-8.166 0-11.666-7-11.666-7S5.834 7 14 7c8.167 0 11.667 7 11.667 7Z" stroke="#F38E69" stroke-linecap="round"/><circle cx="14" cy="14" r="3.5" stroke="#F38E69" stroke-linecap="round"/></svg>
        <svg @click="updateMeal()" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M18.419 4.914a2 2 0 0 1 2.828 0l1.839 1.838a2 2 0 0 1 0 2.829L9.919 22.747a2 2 0 0 1-1.414.586H4.667v-3.838a2 2 0 0 1 .585-1.414L18.42 4.914Z" stroke="#3F4DA6"/><path d="M16.333 7 21 11.667" stroke="#3F4DA6"/></svg>
        <svg @click="deleteNameMeal()" width="27" height="27" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M11.25 16.875V13.5M15.75 16.875V13.5M3.375 7.875h20.25v0c-1.286 0-1.928 0-2.403.285a2 2 0 0 0-.688.687c-.284.475-.284 1.117-.284 2.403v7.25c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586h-5.5c-1.886 0-2.828 0-3.414-.586-.586-.586-.586-1.528-.586-3.414v-7.25c0-1.286 0-1.928-.285-2.403a2 2 0 0 0-.687-.687c-.475-.285-1.117-.285-2.403-.285v0ZM11.327 3.792c.128-.12.41-.225.803-.3a7.514 7.514 0 0 1 1.37-.117c.495 0 .977.04 1.37.116.393.076.675.181.803.3" stroke="#F25C69" stroke-width="2" stroke-linecap="round"/></svg>
      </div>
    </div>
    <div class='showIngredients' v-if="details == true">
      <p class="titledetails">Ingrédients</p>
      <ul>
        <li v-for="intermediaire, idx in intermediaires" :key="idx">
          <span>{{intermediaire.quantity}} {{intermediaire.unity.name}}</span>
          <span>{{intermediaire.ingredients.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueSimpleAlert from 'vue-simple-alert'

Vue.use(VueSimpleAlert)

export default {
  name: 'MealtItem',
  props: {
    meal: Object
  },
  async mounted () {
    fetch('http://localhost:8741/api/intermediaires?meal.id=' + this.meal.id).then((response) => {
      this.intermediaires = response.json().then(json => {
        this.intermediaires = json['hydra:member']
      })
    })
  },
  data () {
    return {
      intermediaires: [],
      details: false
    }
  },
  methods: {
    showIngredients () {
      this.details = !this.details
    },
    updateMeal () {
      this.$router.push('/updatemeal/' + this.meal.id)
    },
    deleteNameMeal () {
      this.$confirm(
        `Le plat sera supprimé définitivement`,
        `Êtes-vous sûr de vouloir supprimer le plat <span>${this.meal.name}</span> ?`,
        'warning'
      ).then(() => {
        axios.delete('http://localhost:8741/api/meals/' + this.meal.id)
          .then((response) => {
            console.log(response.data)
            this.$fire({
              title: 'Confirmation',
              text: `Le plat "${this.meal.name}" a bien été supprimé !`,
              type: 'success',
              timer: 3000
            })
            this.$emit('ondelete', response.data)
          })
          .catch(() => {
            this.$fire({
              title: 'Erreur',
              text: `Le plat "${this.meal.name}" n'a pas pu être supprimé`,
              type: 'error',
              timer: 5000
            })
          })
      })
    }
  }
}
</script>

<style scoped>
  .content {
    margin: 1rem 0;
  }
  .meal-item {
    background-color: #FCE9E1;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
  }
  .name-meal {
    display: flex;
  }
  .img-default {
    margin-right: 1rem;
    cursor: unset;
  }
  p {
    font-size: 18px;
  }
  .name {
    text-transform: capitalize;
  }
  .icon-action {
    display: flex;
    align-items: center;
  }
  svg {
    padding: 0 0.5rem;
    cursor: pointer;
  }
  .showIngredients {
    background-color: #FEF6F3;
    padding: 1.5rem;
    margin-top: -6px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .titledetails {
    text-transform: uppercase;
    font-weight: bold;
    color: #F38E69;
    padding-bottom: 1rem;
  }
  ul {
    line-height: 25px;
  }
  .showIngredients p, ul {
    margin: 0;
  }
</style>
