<template>
  <div class="button">{{this.text}}</div>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style lang="scss">
.button {
  margin: 0 auto;
  margin-top: 4.5rem;

  background: #ff8866;
  color: #fef5ea;
  font-size: 1.25rem;
  font-weight: 600;

  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
  width: 90%;
  height: 2.5rem;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
