<template>
    <div class="app-container">
      
      <Home />
    </div>
  
</template>

<script>

import Home from './views/Home.vue'

export default {
  components: { Home }
}
</script>

<style>

body {
  background: rgb(250, 255, 247)
}

.app-container {
  display: flex;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
