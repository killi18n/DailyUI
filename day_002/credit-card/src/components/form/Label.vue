<template>
  <div class="label">{{this.label}}</div>
</template>

<script>
export default {
  props: ["label"]
};
</script>

<style lang="scss">
.label {
  margin-bottom: 0.75rem;
  color: #ffbd80;
  font-weight: 600;
  font-size: 1rem;
}
</style>

