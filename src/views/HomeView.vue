<template>
  <div class="home">
    <Header></Header>
    <div class="container-md">
      <CardSatate></CardSatate>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import CardSatate from "@/components/CardState";

export default {
  name: "HomeView",
  components: {
    Header,
    CardSatate,
  },
};
</script>
<style lang="scss">

</style>
