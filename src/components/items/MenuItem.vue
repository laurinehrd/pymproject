<template>
  <div class="menu-item">
      <div class="icon">
          <div v-if="`${nameIcon}` == 'meal'">
            <svg class="meal" width="43" height="43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.333 7.167v28.666M32.25 21.5s-5.375-1.792-5.375-7.167 5.375-7.166 5.375-7.166v28.666M8.958 7.167v7.75a3 3 0 0 0 3 3h4.75a3 3 0 0 0 3-3v-7.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div v-if="`${nameIcon}` == 'ingredient'">
            <svg class="ingredient" width="43" height="43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10.583 9.094 1.17-.045.968 25.446-1.17.044-.968-25.445Z"/><path d="M17.145 22.69a6.35 6.35 0 0 0-4.737 7.63 6.35 6.35 0 0 0 4.737-7.63ZM6.256 23.105a6.35 6.35 0 0 1 5.304 7.247 6.35 6.35 0 0 1-5.304-7.247ZM16.911 16.566a6.35 6.35 0 0 0-4.736 7.63 6.35 6.35 0 0 0 4.736-7.63ZM6.022 16.981a6.35 6.35 0 0 1 5.304 7.247 6.35 6.35 0 0 1-5.304-7.247ZM16.677 10.441a6.35 6.35 0 0 0-4.736 7.63 6.35 6.35 0 0 0 4.736-7.63ZM10.896 3.58c-3.086 2.83-2.86 7.17.504 9.694 3.086-2.831 2.86-7.172-.504-9.695ZM5.789 10.857a6.35 6.35 0 0 1 5.303 7.246 6.35 6.35 0 0 1-5.303-7.246ZM32.45 24.175l.657.97-21.09 14.29-.657-.97 21.09-14.29Z"/><path d="M24.37 36.923a6.35 6.35 0 0 0-8.981.014 6.35 6.35 0 0 0 8.98-.014ZM18.26 27.9a6.35 6.35 0 0 1-3.347 8.334A6.35 6.35 0 0 1 18.26 27.9ZM29.444 33.487a6.35 6.35 0 0 0-8.98.014 6.35 6.35 0 0 0 8.98-.014ZM23.334 24.464a6.35 6.35 0 0 1-3.347 8.334 6.35 6.35 0 0 1 3.347-8.334ZM34.519 30.05a6.35 6.35 0 0 0-8.98.014 6.35 6.35 0 0 0 8.98-.013ZM37.287 21.516c-4.035-1.123-7.6 1.364-7.963 5.554 4.035 1.122 7.6-1.365 7.963-5.554ZM28.41 21.028a6.35 6.35 0 0 1-3.348 8.333 6.35 6.35 0 0 1 3.347-8.333Z"/></svg>
          </div>
          <div v-if="`${nameIcon}` == 'category'">
            <svg class="category" width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.604 9.208H2.48A2.482 2.482 0 0 1 0 6.73V4.604a2.482 2.482 0 0 1 2.48-2.479h2.124a2.482 2.482 0 0 1 2.48 2.48v2.124a2.482 2.482 0 0 1-2.48 2.48ZM2.48 4.25a.354.354 0 0 0-.354.354V6.73c0 .196.159.354.354.354h2.125a.354.354 0 0 0 .354-.354V4.604a.354.354 0 0 0-.354-.354H2.48ZM4.604 20.542H2.48A2.482 2.482 0 0 1 0 18.062v-2.124a2.482 2.482 0 0 1 2.48-2.48h2.124a2.482 2.482 0 0 1 2.48 2.48v2.125a2.482 2.482 0 0 1-2.48 2.479ZM2.48 15.583a.354.354 0 0 0-.354.355v2.125c0 .195.159.354.354.354h2.125a.354.354 0 0 0 .354-.354v-2.125a.354.354 0 0 0-.354-.354H2.48ZM4.604 31.875H2.48A2.482 2.482 0 0 1 0 29.395v-2.124a2.482 2.482 0 0 1 2.48-2.48h2.124a2.482 2.482 0 0 1 2.48 2.48v2.125a2.482 2.482 0 0 1-2.48 2.479ZM2.48 26.916a.354.354 0 0 0-.354.355v2.125c0 .195.159.354.354.354h2.125a.354.354 0 0 0 .354-.354V27.27a.355.355 0 0 0-.354-.355H2.48Z"/><path d="M32.937 6.729H10.98a1.063 1.063 0 0 1 0-2.125h21.958a1.063 1.063 0 0 1 0 2.125ZM32.937 18.063H10.98a1.063 1.063 0 0 1 0-2.125h21.958a1.063 1.063 0 0 1 0 2.124ZM32.937 29.396H10.98a1.063 1.063 0 0 1 0-2.125h21.958a1.063 1.063 0 0 1 0 2.125Z"/></svg>
          </div>
      </div>
      <p>{{ menu }}</p>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menu: String,
    nameIcon: String
  }
}
</script>

<style scoped>
.menu-item {
    display: flex;
    align-items: center;
    background-color: transparent;
    border-radius: 10px;
    padding-left: 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
}
img {
    margin-right: 0.5rem;
}
p {
    text-transform: uppercase;
    font-size: 18px;
}
.menu-item:hover {
    background-color: #F38E69;
    transition: 0.2s ease-in;
}
.menu-item:hover p {
    color: white;
    font-weight: bold;
}
.meal {
  stroke: #4F4F4F;
  margin-right: 0.5rem;
}
svg.ingredient, svg.category {
  fill: #4F4F4F;
  margin-right: 0.5rem;
}
svg.category {
  margin-right: 1rem;
}
.menu-item:hover svg.meal {
  stroke: white;
}
.menu-item:hover svg.ingredient, .menu-item:hover svg.category {
  fill: white;
}
</style>
