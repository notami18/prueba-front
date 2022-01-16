<template>
  <div class="home">
    <Header></Header>
    <div class="container">
      <div class="mt-2">
        <br>
        <br>
        <CardSatate></CardSatate>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import CardSatate from "@/components/CardState.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    CardSatate,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
