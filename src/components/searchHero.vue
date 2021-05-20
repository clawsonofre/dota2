<template>
  <div id="prueba" class="container">
    <img class="mt-3" src="../assets/dota2.jpeg" />
    <span
      ><h3 style="color: white">
        <b><u>Search your Hero.</u></b>
      </h3></span
    >
    <div class="mt-4">
      <div>
        <b-form-input
          class="mb-3"
          v-model="text"
          type="text"
          debounce="500"
          style="width: 70%; heigth: 50%; margin: 0px auto; text-align: center"
        ></b-form-input>

        <div class="row">
          <Heroes class="col-4"
            :dota="dota"
            
            v-for="(dota, index) in filterSearch"
            :key="index"
          ></Heroes>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Heroes from "./heroes.vue";
export default {
  name: "Login",
  components: {
    Heroes,
  },
  data() {
    return {
      text: "",
      heros: [],
    };
  },

  mounted() {
    this.getHeroes();
  },
  methods: {
    getHeroes() {
      this.axios.get("https://api.stratz.com/api/v1/Hero/").then((response) => {
        for (const index in response.data) {
          this.heros.push(response.data[index]);
        }
      });
    },
  },
  computed: {
    filterSearch() {
      return this.heros.filter((dota) => {
        return dota.displayName.toLowerCase().match(this.text.toLowerCase());
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