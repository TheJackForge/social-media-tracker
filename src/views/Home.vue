<template>
  <div class="home-main-container">
    <div class="social-task-main-container" v-if="socialTasks.length">
      <FilterNav @filterChange="current = $event" :current="current" />
      <div v-for="socialTask in filteredSocialTasks" :key="socialTask.id">
        <SocialTask :socialTask="socialTask" @removeTask="removeTask" @completeTask="completeTask"/>
        
      </div>
      <router-link to="/create">
        <button class="new-task-button">Add New Task</button>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import SocialTask from '../components/SocialTask.vue'
import FilterNav from '../components/FilterNav.vue'

export default {
  name: 'Home',
  components: { SocialTask, FilterNav },
  data() {
    return {
      socialTasks: [],
      endPoint: 'http://localhost:3000/socialTasks/',
      current: 'all'
    }
  },
  mounted() {
    fetch('http://localhost:3000/socialTasks')
    .then( res => res.json())
    .then( data => this.socialTasks = data)
    .catch( err => console.log(err.message))
  },
  methods: {
    removeTask(id) {
      this.socialTasks = this.socialTasks.filter(( task => {
        return task.id !== id
      }))
    },
    completeTask(id) {
      console.log(id)
      let t = this.socialTasks.find(task => {
        return task.id === id
      })
      t.complete = !t.complete
    }
  },
    computed: {
      filteredSocialTasks() {
          if (this.current === 'completed') {
              return this.socialTasks.filter( ( task ) => task.complete)
              console.log(this.current)
          }
          if (this.current === 'ongoing' ) {
              return this.socialTasks.filter( ( task ) => !task.complete)
          }
          return this.socialTasks
      }
  }
}
</script>

<style scoped>

.home-main-container {
  display: flex;
  justify-content: center;
  align-content: center;
}

.social-task-main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.new-task-button {
  border: none;
  background: rgb(200, 235, 177);
  padding: 10px 50px;
  border-radius: 8px;
  cursor: pointer;
}

.new-task-button:active {
  transform: scale(0.98);
}

</style>