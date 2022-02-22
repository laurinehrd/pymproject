<template>
  <div>
    <h2>Ajouter un nouvel ingrédient</h2>
    <p>Nom de l'ingrédient</p>
    <input type="text" v-model="name">
    <p>Catégorie de l'ingrédient</p>
    <select name="category" id="category" v-model="idCat">
        <option v-for="c, idx in categories" :key="idx" :category="c" :value="c['@id']">{{ c.name }}</option>
    </select>
    <div class="btn">
      <button class="cancel" @click="goBack()">Annuler</button>
      <button class="add" @click="add()">Ajouter</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueSimpleAlert from 'vue-simple-alert'

Vue.use(VueSimpleAlert)

export default {
  name: 'newIngredient',
  async mounted () {
    fetch('http://localhost:8741/api/categories').then((response) => {
      response.json()
      .then(json => {
        this.categories = json['hydra:member']
      })
      .catch(e => {
        console.log(e)
      })
    })
  },
  data () {
    return {
      categories: [],
      name: '',
      idCat: 0
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    add () {
      axios.post('http://localhost:8741/api/ingredients', {
        name: this.name,
        category: this.idCat
      })
        .then(() => this.goBack())
      this.$fire({
        title: 'Ajouté',
        text: `L'ingrédient "${this.name}" a bien été ajouté !`,
        type: 'success',
        timer: 3000
      }).then(r => {
        console.log(r.value)
      })
    }
  }
}
</script>

<style scoped>
  p {
    text-transform: uppercase;
  }
  h2 {
    margin-bottom: 3rem;
    font-weight: lighter;
    font-size: 28px;
  }
  input, select {
    background-color: #FCE9E1;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-family: 'Gilroy';
    font-size: 16px;
    width: 50%;
    margin-bottom: 2rem;
  }
  select {
    width: 20%;
  }
  .btn {
    text-align: center;
    margin-top: 2rem;
  }
  .btn button.add {
    background-color: #F38E69;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Gilroy';
    border: none;
    border-radius: 5px;
    padding: 0.5rem 3rem;
    cursor: pointer;
  }
  .btn button.cancel {
    background-color: white;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Gilroy';
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0.5rem 3rem;
    cursor: pointer;
  }
  .btn button.cancel:hover {
    border: 1px solid black;
    transition: ease-in-out all 0.2s;
  }
</style>
