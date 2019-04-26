<template>
  <div class="background">
    <CreditBox></CreditBox>
  </div>
</template>

<script>
import CreditBox from "./CreditBox.vue";

export default {
  components: {
    CreditBox
  }
};
</script>

<style lang="scss">
.background {
  height: calc(100vh);
}
</style>
