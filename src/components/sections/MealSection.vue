<template>
  <div>
      <btn-add-new btn="un nouveau plat" @click="goAdd()"/>
      <meal-item v-for="m, idx in meals" :key="idx" :meal="m" @ondelete="deleteMeal(m)"/>
  </div>
</template>

<script>
import MealItem from '../items/MealItem.vue'
import BtnAddNew from '../BtnAddNew.vue'

export default {
  components: {
    MealItem,
    BtnAddNew
  },
  async mounted () {
    fetch('http://localhost:8741/api/meals').then((response) => {
      this.meals = response.json().then(json => {
        this.meals = json['hydra:member']
      })
    })
  },
  data () {
    return {
      meals: []
    }
  },
  methods: {
    goAdd () {
      this.$router.push('/newmeal')
    },
    deleteMeal (m) {
      const i = this.meals.findIndex(meal => meal.id === m.id)
      this.meals.splice(i, 1)
    }
  }
}
</script>
