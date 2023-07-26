<template>
  <div class="container" v-if="weather">
    <Header />
    <Main />
  </div>
  <div class="loading" v-else>
    <h1>Идет загрузка...</h1>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Header,
    Main,
  },
  computed: {
    ...mapState(["weather"]),
  },
  methods: {
    ...mapActions(["getWaether"]),
  },
  created() {
    this.getWaether("Ташкент")
  },
};
</script>