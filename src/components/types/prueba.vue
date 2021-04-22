<template>
  <div id="app">
    {{ filterHeroes.length }} Heroes Disponibles <br />
    <input type="text" v-model="search" />
    <Hero :hero="hero" v-for="(hero, index) in filterHeroes" :key="index" />
  </div>
</template>

<script>
import Hero from "./components/Hero";
import axios from "axios";

export default {
  name: "App",
  components: {
    Hero
  },
  data() {
    return {
      heroes: [],
      search: ""
    };
  },
  computed: {
    // a computed getter
    filterHeroes: function() {
      if (this.search === "") {
        return this.heroes;
      }
      return this.heroes.filter(item =>
        /* Pasamos todo a lowerCase para que no distinga minusculas de mayusculas */
        item.displayName.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  mounted() {
    this.getHeroes();
  },
  methods: {
    getHeroes: function() {
      axios
        .get("https://api.stratz.com/api/v1/Hero")
        .then(response => {
          /*
          ++++PROBLEMA API+++++
          Formatear array nuevo porque el servicio trae objetos undefined
          entonces las funciones de  array map, filter no funcionan
          
          PD: Faltan heroes Object.keys(response.data) parece que solo detecta 120
          PROBAR CON OTRO METODO ITERATIVO
          
          #####Metodo cambiado a FOR...IN para objetos y que los index se saltaban 5 heroes: 24, 115, 116, 117, 118
          
          */
          for (const index in response.data) {
            /* 
            Chequear si tiene información el response en esa posicón, por alguna razón
            algunos vienen undefined
            
            Como siempre tendremos el key por el for in, en index, no
            hace falta hacer esta validación
            */
            /*
            Transformando a array para poder usar el metodo filter
           */
            this.heroes.push(response.data[index]);
          }
        })
        .catch(e => {
          // Capturamos los errores
        });
    }
  }
};
</script>