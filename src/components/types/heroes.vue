<template>
  <div class="container">
    <div>
      <b-button
        variant="dark"
        style="border-radius: 5rem"
        class="mb-3"
        @click="mostrar()"
        >{{ datos.displayName + " "
        }}<b-icon icon="book" variant="primary"></b-icon>
      </b-button>
      <v-card
        class="p-3"
        style="text-align: justify; border-radius: 30px"
        elevation="10"
        loading
        v-if="check"
        ><h3 style="text-align: center">
          Biografía de {{ datos.displayName }}
        </h3>
        <span >{{ datos.language.bio }}</span>
      </v-card>
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
