<template>
  <button @click="$emit('click')">
      <svg class="add" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 12H7M12 17V7" stroke-width="2" stroke-linecap="round"/><path stroke-width="2" clip-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/></svg>
      <p>Ajouter {{ btn }}</p>
  </button>
</template>

<script>
export default {
  name: 'BtnAddNew',
  props: {
    btn: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
      color: #F38E69;
      background-color: transparent;
      border: 2px solid #F38E69;
      border-radius: 10px;
      font-weight: bold;
      font-size: 18px;
      padding: 1rem;
      margin-left: auto;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      font-family: 'Gilroy';
      cursor: pointer;
  }
  button:hover {
      background-color: #F38E69;
      color: white;
  }
  svg.add {
    stroke: #F38E69;
    margin-right: 0.5rem;
  }
  button:hover svg.add {
    stroke: white;
  }
  p {
    margin: 0;
  }

</style>
