<template>
  <div class="welcome">
    <h2>Bienvenue sur <span class="logo">Pym</span> !</h2>
    <h3>Ici, tu peux consulter la liste de tous les plats, ingrédients et catégories existants, et en ajouter des nouveaux !</h3>
    <p>Comment créer un nouveau plat ?</p>
    <ul>
        <li>Vérifie d'abord que tous les ingrédients de ton plat sont disponibles dans la <span @click="listIng()">liste des ingrédients</span>.</li>
        <li>Si non, <span @click="addIng()">créer un nouvel ingrédient</span>. Il te faudra aussi renseigner la catégorie à laquelle ton ingrédient sera rattaché, si cette catégorie n'existe pas encore, il te faudra d'abord ajouter <span @click="addCat()"> une nouvelle catégorie</span>.</li>
        <li>Maintenant que tous tes ingrédients et catégories sont disponibles, tu peux <span @click="addMeal()">créer ton plat</span>. Il te suffit de donner un nom à ton nouveau plat, puis pour chaque ingrédient tu as juste à sélectionner le nom de l'ingrédient dans la liste déroulante, et indiquer sa quantité avec son unité de valeur.</li>
        <li>Tu ajoutes ton nouveau plat, et tadaam il est disponible ! Tu n'as plus qu'à aller le sélectionner depuis l'application mobile en lui attribuant un jour pour le déguster !</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    listIng () {
      this.$router.push('/ingredients')
    },
    addIng () {
      this.$router.push('/newingredient')
    },
    addCat () {
      this.$router.push('/newcategory')
    },
    addMeal () {
      this.$router.push('/newmeal')
    }
  }
}
</script>

<style scoped>
.welcome {
    width: 70%;
    margin: auto;
}
.logo {
    font-family: 'Lobster Two';
}
h2 {
    color: #F38E69;
    text-align: center;
    font-size: 38px;
    margin-bottom: 4rem;
}
h3 {
    margin-bottom: 4rem;
    font-size: 28px;
    text-align: justify;
}
p {
    color: #F38E69;
    font-weight: bold;
    font-size: 24px;
}
ul {
    list-style: decimal;
    font-size: 18px;
    line-height: 25px;
}
li {
    padding-left: 1rem;
    margin-bottom: 1rem;
    text-align: justify;
}
ul span {
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
}
ul span:hover {
    color: #F38E69;
    transition: ease-in-out all 0.2s;
}
</style>
