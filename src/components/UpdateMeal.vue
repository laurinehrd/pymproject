<template>
  <div>
    <h2>Modification du plat "{{this.namemeal}}"</h2>
    <div class="line">
        <div class="nameMeal">
            <p class="title">Nom du plat</p>
            <input class="bg" type="text" v-model="namemeal" >
        </div>
    </div>
    <div class="section-ing">
        <p class="title">Les ingrédients du plat</p>
        <div class="item" v-for="ingredient, idx in listIngredients" :key="idx">
            <div class="firstline">
              <p class="ingN">Ingrédient {{idx+1}}</p>
              <button @click="delIngredientContent(idx)"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.3888 29.3887 10.5579 10.5578M29.3884 10.5578 10.5575 29.3887" stroke="#4F4F4F" stroke-linecap="round"/></svg></button>
            </div>
            <div class="info">
                <div class="name">
                    <p>Nom :</p>
                    <multiselect
                        :options="ingredients"
                        label="name"
                        track-by="id"
                        select-label=""
                        selectedLabel="sélectionné"
                        deselectLabel=""
                        v-model="ingredient.currentIngredient"
                        placeholder="Sélectionner un ingrédient"
                        :allow-empty="false">
                    </multiselect>
                    <div class="name-category">
                      <p class="category">Catégorie : </p>
                      <p>{{ ingredient.currentIngredient.category? ingredient.currentIngredient.category.name : ''}}</p>
                    </div>
                </div>
                <div class="quantity">
                    <p>Quantité :</p>
                    <quantity v-model="ingredient.quantity"></quantity>
                </div>
            </div>
        </div>
        <div class="more"><button @click="addIngredientContent()"><svg width="33" height="33" viewBox="0 0 33 33" fill="none"><path d="M23.375 16.5H9.625M16.5 23.375V9.625" stroke="#F38E69" stroke-width="2" stroke-linecap="round"/><path clip-rule="evenodd" d="M16.5 30.25c7.5939 0 13.75-6.1561 13.75-13.75 0-7.594-6.1561-13.75-13.75-13.75-7.594 0-13.75 6.156-13.75 13.75 0 7.5939 6.156 13.75 13.75 13.75Z" stroke="#F38E69" stroke-width="2"/></svg></button></div>
    </div>
    <div class="btn">
        <button class="cancel" @click="goBack()">Annuler</button>
        <button class="add" @click="putMeal()">Modifier</button>
    </div>
  </div>
</template>

<script>
import Quantity from './Quantity.vue'
import axios from 'axios'
import Multiselect from 'vue-multiselect'

export default {
  name: 'updateMeal',
  components: { Quantity, Multiselect },
  async mounted () {
    fetch('http://localhost:8741/api/meals/' + this.id).then((response) => {
      response.json().then(json => {
        this.namemeal = json['name']
        this.listIngredients = json['intermediaires'].map(i => { // map = mettre en forme des table
          return {
            currentIngredient: i['ingredients'],
            quantity: {number: i['quantity'], unit: i['unity']['@id']}
          }
        })
      })
      .catch(e => {
        console.log(e)
      })
    })
    // to display ingredient's list in the dropdown
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
      ingredients: [],
      listIngredients: [],
      namemeal: '',
      nameingredient: ''
    }
  },
  props: {
    id: Number
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    addIngredientContent () {
      this.listIngredients.push({currentIngredient: {}, quantity: {number: 2, unit: 4}})
    },
    delIngredientContent (idx) {
      this.listIngredients.splice(idx, 1)
    },
    putMeal () {
      axios.put('http://localhost:8741/api/meals/' + this.id, {
        name: this.namemeal,
        intermediaires: this.listIngredients.map(i => {
          return {
            ingredients: i.currentIngredient['@id'],
            quantity: i.quantity.number,
            unity: i.quantity.unit
          }
        })
      })
        .then((response) => {
          console.log(response.data)
          this.goBack()
          this.$fire({
            title: 'Confirmation',
            text: `Le plat "${this.namemeal}" a bien été modifié !`,
            type: 'success',
            timer: 3000
          })
        })
        .catch(() => {
          this.$fire({
            title: 'Erreur',
            text: `Le plat "${this.namemeal}" n'a pas pu être modifié`,
            type: 'error',
            timer: 5000
          })
        })
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
  .title {
    text-transform: uppercase;
    font-size: 18px;
  }
  h2 {
    margin-bottom: 3rem;
    font-weight: lighter;
    font-size: 28px;
  }
  .line {
      display: flex;
  }
  .nameMeal {
      width: 60%;
  }
  .chooseImage {
      width: 40%;
  }
  input.bg {
    background-color: #FCE9E1;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-family: 'Gilroy';
    font-size: 16px;
    width: 80%;
    margin-bottom: 2rem;
  }
.button-wrapper {
    position: relative;
}
.button-wrapper div.label {
    background: #FCE9E1;
    cursor: pointer;
    color: #F38E69;
    padding: 0.5rem 3rem;
    border-radius: 5px;
    width: fit-content;
    position: relative;
    z-index: 0;
    display: inline-block;
}
#upload {
    opacity: 0;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    z-index: 1;
    top: 32px;
    left: 0;
    height: 55px;
}

.section-ing {
    width: 100%;
}
.item {
    background: #FCE9E1;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
}
.firstline {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ingN {
    color: #F38E69;
    text-decoration: underline;
    font-weight: bold;
    margin: 0;
    font-size: 18px;
}
.info {
    display: flex;
}
.name, .quantity {
    width: 50%;
}

.name-category {
    display: flex;
  }
  .category {
    text-transform: uppercase!important;
    padding-right: 0.3rem;
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
  .more {
    text-align: center;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .more button svg {
    stroke: #F38E69;
  }
</style>
