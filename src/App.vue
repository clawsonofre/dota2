<template>
  <div id="app">
    <div>

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
  background-image: url('assets/fondo.jpeg');
  /* Ubicación de la imagen */

/* Para dejar la imagen de fondo centrada, vertical y

horizontalmente */

background-position: center center;

/* Para que la imagen de fondo no se repita */

background-repeat: no-repeat;

/* La imagen se fija en la ventana de visualización para que la altura de la imagen no supere a la del contenido */

background-attachment: fixed;

/* La imagen de fondo se reescala automáticamente con el cambio del ancho de ventana del navegador */

background-size: cover;

/* Se muestra un color de fondo mientras se está cargando la imagen

de fondo o si hay problemas para cargarla */
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
