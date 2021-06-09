<template>
  <nav>
      <h1>SOCIAL MEDIA TRACKER</h1>
        <div>
        <router-link :to="{name: 'Home'}"><button class="nav-button">Social Tasks</button></router-link>
        <router-link :to="{name:'CreateTask'}"><button class="nav-button">Create New Task</button></router-link>
        </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
}

nav h1 {
    margin: 0;
    font-size: 32px;
}

.nav-button {
    background: none;
    border: none;
    background-color: rgb(200, 235, 177);
    padding: 10px 40px;
    border-radius: 8px;
    margin: 20px 10px 40px 10px;
    cursor: pointer;
}

</style>