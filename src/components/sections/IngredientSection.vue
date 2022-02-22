<template>
    <div>
        <btn-add-new btn="un nouvel ingrédient" @click="goAdd()"/>
        <div class="list-ingredients">
          <ingredient-item class="item-ing" v-for="i, idx in ingredients" :key="idx" :ingredient="i" @ondelete="deleteIngredient(i)" @onupdate="updateIngredient($event)"/>
        </div>
    </div>
</template>

<script>
import IngredientItem from '../items/IngredientItem.vue'
import BtnAddNew from '../BtnAddNew.vue'
import Vue from 'vue'

export default {
  components: {
    IngredientItem,
    BtnAddNew
  },
  async mounted () {
    fetch('http://localhost:8741/api/ingredients').then((response) => {
      response.json()
      .then(json => {
        this.ingredients = json['hydra:member']
      })
      .catch(e => {
        console.log(e)
      })
    })
  },
  data () {
    return {
      ingredients: []
    }
  },
  methods: {
    goAdd () {
      this.$router.push('/newingredient')
    },
    deleteIngredient (i) {
      const j = this.ingredients.findIndex(ing => ing.id === i.id)
      this.ingredients.splice(j, 1)
    },
    updateIngredient (newing) {
      const i = this.ingredients.findIndex(ing => ing.id === newing.id)
      Vue.set(this.ingredients, i, newing)
    }
  }
}
</script>

<style scoped>
.list-ingredients {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.item-ing {
  width: 46%;
}
</style>
