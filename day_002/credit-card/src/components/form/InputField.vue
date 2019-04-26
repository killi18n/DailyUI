<template>
  <div class="input-field">
    <input type="text" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: ["placeholder"]
};
</script>

<style lang="scss">
.input-field {
  display: flex;

  input {
    flex: 1;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #fde1d8;
    padding-bottom: 0.25rem;
    padding-top: 0.25rem;

    font-size: 1.15rem;

    width: 100%;
  }
}
</style>
