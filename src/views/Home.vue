<template>
  <div class="home-main-container">
    <div class="social-task-main-container" v-if="socialTasks.length">
      <div v-for="socialTask in socialTasks" :key="socialTask.id">
        <SocialTask :socialTask="socialTask" @removeTask="removeTask" @completeTask="completeTask"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import SocialTask from '../components/SocialTask.vue'

export default {
  name: 'Home',
  components: { SocialTask },
  data() {
    return {
      socialTasks: [],
      endPoint: 'http://localhost:3000/socialTasks/'
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

</style>