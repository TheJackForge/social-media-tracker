<template>
<div class="create-new-task-main-container">
    
    <div class="create-new-task-form-container">
        <h2>Add New Social Media Task</h2>
        <form @submit.prevent="editTask" class="create-new-task-form">
        <label>Title</label>
        <input type="text" required v-model="title" >
        <label>Social Network</label>
        <input type="text" required v-model="socialNetwork">
        <label>Details</label>
        <textarea required v-model="details"></textarea>
                <div class="create-new-task-button-container">
            <router-link to="/"><button>Go Back</button></router-link> 
            <button>Edit Task</button>
        </div>
        </form>
    </div>
</div>


</template>

<script>
export default {
    name: 'CreateTask',
    props: ['id'],
    data() {
        return {
            title: '',
            details: '',
            socialNetwork: '',
            endPoint: 'http://localhost:3000/socialTasks/' + this.id
        }
    },
    mounted() {
        fetch(this.endPoint)
        .then( res => res.json() )
        .then( data => {
            this.title = data.taskTitle
            this.details = data.details
            this.socialNetwork = data.socialNetwork
            })
    },
    methods: {
        editTask() {
        fetch(this.endPoint, {
            method: 'PATCH',
            body: JSON.stringify({
                title: this.title,
                details: this.details,
                socialNetwork: this.socialNetwork
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .then ( () => {
            this.$router.push('/')
        }).catch((err) => console.log(err))
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
    padding: 5px 0;
}

textarea {
    border: 1px solid rgba(128, 128, 128, 0.76);
    height: 100px;
    resize: none;
}

.create-new-task-form-container {
    background: rgb(243, 243, 243);
    border-radius: 8px;
    padding: 20px 40px 50px 40px;
}

.create-new-task-form {
    display: flex;
    flex-direction: column;
}

.create-new-task-main-container h2{
    text-align: center;
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
    margin-top: 20px;
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