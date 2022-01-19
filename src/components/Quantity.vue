<template>
  <div class="quantity">
      <input class="number" type="number" id="quantity" name="quantity" min="1" max="900" :value='value.number' @input="$emit('input', {...value, number:parseInt($event.target.value)})">
      <select class="unity" name="unity" id="unity" :value='value.unit' @change="$emit('input', {number:value.number, unit: $event.target.value})">
        <option v-for="u, idx in unities" :key="idx" :unity="u" :value="u['@id']" :selected="value.unit===u['@id']">{{ u.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Quantity',
  async mounted () {
    fetch('http://localhost:8741/api/unities').then((response) => {
      this.unities = response.json().then(json => {
        this.unities = json['hydra:member']
        const unitydefault = this.unities[0]['@id']
        if (this.value.unit == null) {
          this.$emit('input', {number: this.value.number, unit: unitydefault})
        }
      })
    })
  },
  props: {
    value: Object
  },
  data () {
    return {
      unities: []
    }
  }
}
</script>

<style scoped>
  .quantity {
      display: flex;
  }
  .number {
      background-color: white;
      border: none;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      width: 60px;
      padding: 0.5rem;
      font-family: 'Gilroy';
      text-align: center;
  }
  .unity {
      color: #F38E69;
      font-family: 'Gilroy';
      font-weight: bold;
      background-color: white;
      border: none;
      border-left: 2px solid #FCE9E1;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      text-align: center;
  }
</style>
