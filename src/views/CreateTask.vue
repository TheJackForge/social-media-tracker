<template>
<div class="create-new-task-main-container">
    <h2>Add New Social Media Task</h2>
  <form @submit.prevent="submitForm" class="create-new-task-form">
      <label>Title</label>
      <input type="text" required v-model="title" >
      <label>Details</label>
      <textarea required v-model="details"></textarea>
  </form>
  <p>{{this.title}} {{ this.details }} </p>
  <div class="create-new-task-button-container">
      <button>Go Back</button> <button>Add Task</button></div>
</div>

</template>

<script>
export default {
    data() {
        return {
            title: '',
            details: ''
        }
    },
    methods: {
        submitForm() {
            console.log(this.title, this.details)
        }
    }

}
</script>

<style>

label {
    padding-top: 20px;
}

input {
    border: 1px solid rgba(128, 128, 128, 0.76);
}

textarea {
    border: 1px solid rgba(128, 128, 128, 0.76);
    height: 100px;
}

.create-new-task-form {
    display: flex;
    flex-direction: column;
}

.create-new-task-main-container {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.create-new-task-button-container {
    display: flex;
}

.create-new-task-button-container button {
    border: none;
    background-color: rgb(200, 235, 177);
    padding: 10px 50px;
    border-radius: 8px;
    cursor: pointer;
}

.create-new-task-button-container button:active {
    transform: scale(0.98);
}

.create-new-task-button-container button:nth-of-type(1) {
    margin-right: 10px;
}


</style>