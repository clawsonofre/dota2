<template>
  <div id="prueba" class="container">
    <img class="mt-3" src="../assets/dota2.jpeg" />
    <span
      ><h3 style="color: white">
        Ingrese el nombre o letra que tenga su heroe
      </h3></span
    >
    <div class="mt-4">
      <div>
        <b-form-input
          class="mb-3"
          v-model="texto"
          type="text"
          debounce="500"
          style="width: 70%; heigth: 50%; margin: 0px auto; text-align: center"
        ></b-form-input>

        <div>
          <Heros
            :datos="datos"
            v-for="(datos, index) in buscar"
            :key="index"
          ></Heros>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Heros from "./types/heros.vue";
export default {
  name: "Login",
  components: {
    Heros,
  },
  data() {
    return {
      texto: "",
      heros: [],
    };
  },

  mounted() {
    this.dota2Axios();
  },
  methods: {
    dota2Axios() {
      this.axios.get("https://api.stratz.com/api/v1/Hero/").then((response) => {
        for (const index in response.data) {
          this.heros.push(response.data[index]);
        }
      });
    },
  },
  computed: {
    buscar() {
      return this.heros.filter((datos) => {
        return datos.displayName.toLowerCase().match(this.texto.toLowerCase());
      });
    },
  },
};
</script>
<style>
img {
  max-width: 80%;
  min-width: 50%;
  border-radius: 50%;
}
</style>