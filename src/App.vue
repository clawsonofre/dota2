<template>
  <div id="app">
    <div>
      <b-navbar class="position-sticky" type="dark" variant="dark">
        <b-navbar-nav> </b-navbar-nav>
      </b-navbar>
    </div>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background-color: rgb(175, 175, 255);
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#login {
  text-align: center;
  padding: 20%;
  padding-top: 0%;
}
#user {
  padding: 1%;
}
</style>
