<template>
  <div class="container">
    <div>
      <b-button
        variant="dark"
        style="border-radius: 5rem"
        class="mb-3"
        @click="searchDota()"
        >{{ dota.displayName + " "
        }}<b-icon icon="book" variant="primary"></b-icon>
      </b-button>
      <v-card
        class="p-3"
        style="text-align: justify; border-radius: 30px"
        elevation="10"
        loading
        v-if="check"
        ><h3 style="text-align: center">{{ dota.displayName }} Biography</h3>
        <span>{{ dota.language.bio }}</span>
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
  name: "Heros",
  props: {
    dota: "",
  },

  methods: {
    searchDota() {
      this.check = !this.check;
    },
  },
};
</script>
