<template>
    <div>
        <btn-add-new btn="une nouvelle catégorie" @click="goAdd()"/>
        <div class="list-categories">
          <category-item class="item-cat" v-for="c, idx in categories" :key="idx" :category="c" @ondelete="deleteCategory(c)" @onupdate="updateCategory($event)" />
        </div>
    </div>
</template>

<script>
import CategoryItem from '../items/CategoryItem.vue'
import BtnAddNew from '../BtnAddNew.vue'
import Vue from 'vue'

export default {
  components: {
    CategoryItem,
    BtnAddNew
  },
  async mounted () {
    fetch('http://localhost:8741/api/categories').then((response) => {
      this.categories = response.json().then(json => {
        this.categories = json['hydra:member']
      })
    })
  },
  data () {
    return {
      categories: []
    }
  },
  methods: {
    goAdd () {
      this.$router.push('/newcategory')
    },
    deleteCategory (c) {
      const i = this.categories.findIndex(cat => cat.id === c.id)
      this.categories.splice(i, 1)
    },
    updateCategory (newcat) {
      const i = this.categories.findIndex(cat => cat.id === newcat.id)
      // this.categories[i] = newcat
      Vue.set(this.categories, i, newcat)
    }
  }
}
</script>

<style scoped>
.list-categories {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.item-cat {
  width: 46%;
  padding: 0;
}
</style>
