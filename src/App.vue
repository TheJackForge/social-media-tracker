<template>
    <div class="app-container">
      <router-view />
    </div>
  
</template>

<script>

import Home from './views/Home.vue'
import CreateTask from './views/CreateTask.vue'

export default {
  components: { Home, CreateTask }
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
