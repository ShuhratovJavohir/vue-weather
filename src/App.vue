<template>
  <div class="container" v-if="weather">
    <Header />
    <Main />
  </div>
  <div class="loading" v-else>
    <Loading/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Loading from '@/components/Loading.vue'
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Header,
    Main,
    Loading
  },
  computed: {
    ...mapState(["weather"]),
  },
  methods: {
    ...mapActions(["getWaether"]),
  },
  created() {
    setTimeout(() => this.getWaether("Ташкент"), 500)
  },
};
</script>