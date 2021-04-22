<template>
  <div id="prueba" class="container">
    <h4>{{ titulo }}</h4>
    <img src="../assets/dota2.jpeg" />
<span><h3>Ingrese el nombre o letra que tenga su heroe</h3></span>
    <div class="mt-4">
      <div>
        <b-form-input v-model="texto" type="text" debounce="500"></b-form-input>

        <div >
          <Heroes
            :datos="datos"
            v-for="(datos, index) in buscar"
            :key="index"
          ></Heroes>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Heroes from "../components/types/heroes.vue";
export default {
  name: "Login",
  components: {
    Heroes,
  },
  data() {
    return {
      texto: "",
      titulo: "Dota2",
      heroes: [],
    };
  },

  mounted() {
    this.dota2Axios();
  },
  methods: {
    dota2Axios() {
      this.axios.get("https://api.stratz.com/api/v1/Hero/").then((response) => {
        for (const index in response.data) {
          this.heroes.push(response.data[index]);
        }
      });
    },
  },
  computed: {
    buscar() {
      return this.heroes.filter((datos) => {
        return datos.displayName.toLowerCase().match(this.texto.toLowerCase());
      });
    },
  },
};
</script>
<style>
img {
  max-width: 100%;
  max-height: 1%;
}
</style>