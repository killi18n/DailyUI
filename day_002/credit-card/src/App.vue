<template>
  <div id="app">
    <Background>
      <CreditBox></CreditBox>
    </Background>
  </div>
</template>

<script>
import Background from "./components/wrapper/Background.vue";

export default {
  name: "app",
  components: {
    Background
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  background: #ffbe84;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
