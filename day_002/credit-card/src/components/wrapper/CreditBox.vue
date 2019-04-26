<template>
  <div class="credit-box">
    <Header/>
    <Form/>
  </div>
</template>

<script>
import Header from "../header/Header.vue";
import Form from "../form/Form.vue";
export default {
  components: {
    Header,
    Form
  }
};
</script>

<style lang="scss">
@import "~include-media/dist/include-media";
.credit-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  //   border: 1px solid #2c3e50;
  border-radius: 25px;

  width: 400px;
  height: 80%;

  @include media("height<750px") {
    height: 625px;
  }

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  display: flex;
  flex-direction: column;

  @include media("height<750px") {
    position: static;
    transform: none;
    margin: 0 auto;
    margin-top: 2.5rem;
  }
}
</style>
