<template>
    <div class="task">
        <div class="task-title-icon-container" :class="{ complete: socialTask.complete }">
            <div class="task-title">
            <h3>{{ socialTask.taskTitle}} ({{ socialTask.socialNetwork }})</h3>
            <button class="details-button" @click="showDetails" ><span v-if="this.showDetail">HIDE</span><span v-if="!this.showDetail">SHOW</span></button>
            </div>
            <div class="action-icons">
                <div class="icon-container"><span class="material-icons">
edit
</span></div>
                <div class="icon-container" @click="deleteTask"><span class="material-icons">
delete
</span></div>
                <div class="icon-container" @click="completeTask"><span class="material-icons mark-complete">
done_outline
</span></div>
            </div>
        </div>
        
            <div class="task-details" v-show="showDetail">
                <p>{{ socialTask.details }}</p>
            </div>
        
    </div>
</template>

<script>
export default {
    props: [ 'socialTask' ],
    data() {
        return {
            showDetail: false,
            endPoint: 'http://localhost:3000/socialTasks/' + this.socialTask.id
        }
    },
    methods: {
        showDetails() {
            this.showDetail = !this.showDetail
        },
        deleteTask() {
            fetch(this.endPoint, { method: 'DELETE' })
            .then(() => this.$emit( 'removeTask', this.socialTask.id ))
            .catch((err) => console.log(err.message))
        },
        completeTask() {
            fetch(this.endPoint, { method: 'PATCH' ,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({complete: !this.socialTask.complete})
            })
            .then(() => this.$emit ('completeTask', this.socialTask.id))
            .catch((err) => console.log(err.message))
        }
    }
}
</script>

<style>

.task {
    width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: rgb(243, 243, 243);
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 20px 0 20px 20px;
}

.task-title-icon-container {
    display: flex;
    justify-content: space-between;
    background: rgb(243, 243, 243);
}

.action-icons {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.icon-container {
    margin: 0 5px;
}

.details-button {
    border: none;
    background-color: rgb(200, 235, 177);
    padding: 10px 50px;
    border-radius: 8px;
    cursor: pointer;
}

.details-button:active {
    transform: scale(0.99);
}

.material-icons {
    cursor: pointer;
}

.task-title-icon-container.complete .mark-complete {
    color: rgb(94, 255, 0);
}

</style>