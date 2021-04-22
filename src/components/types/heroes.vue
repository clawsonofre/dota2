<template>
  <div class="container">
    <div>
      <v-btn class="mb-1" @click="mostrar()" pill variant="outline-danger"
        >{{ datos.displayName + " " }}<b-icon icon="book" variant="primary"></b-icon>
      </v-btn>
      <v-list>
        <v-card elevation="10" loading v-if="check">
          <div>{{ datos.language.bio }}</div>
        </v-card></v-list
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      check: false,
    };
  },
  name: "Heroes",
  props: {
    datos: "",
  },
  methods: {
    mostrar() {
      this.check = !this.check;
    },
  },
};

//https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/
</script>
