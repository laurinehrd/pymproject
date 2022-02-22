import Vue from 'vue'
import Router from 'vue-router'
import IngredientSection from '@/components/sections/IngredientSection'
import CategorySection from '@/components/sections/CategorySection'
import MealSection from '@/components/sections/MealSection'
import NewIngredient from '@/components/NewIngredient'
import NewCategory from '@/components/NewCategory'
import NewMeal from '@/components/NewMeal'
import Home from '@/components/Home'
import UpdateMeal from '@/components/UpdateMeal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ingredients',
      name: 'IngredientSection',
      component: IngredientSection,
      linkActiveClass: 'active'
    },
    {
      path: '/categories',
      name: 'CategorySection',
      component: CategorySection,
      linkActiveClass: 'active'
    },
    {
      path: '/meals',
      name: 'MealSection',
      component: MealSection,
      linkActiveClass: 'active'
    },
    {
      path: '/newingredient',
      name: 'NewIngredient',
      component: NewIngredient
    },
    {
      path: '/newcategory',
      name: 'NewCategory',
      component: NewCategory
    },
    {
      path: '/newmeal',
      name: 'NewMeal',
      component: NewMeal
    },
    {
      path: '/updatemeal/:id',
      name: 'UpdateMeal',
      component: UpdateMeal,
      props: route => ({ id: parseInt(route.params.id) })
    }
  ]
})
