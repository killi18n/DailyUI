<template>
  <div class="checkbox-with-detail">
    <input type="checkbox" id="checkbox">
    <label for="checkbox"/>
    <div class="text-detail">save card details</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.checkbox-with-detail {
  margin: 0 auto;
  margin-top: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  input[id="checkbox"] {
    display: none;
  }
  label {
    width: 15px;
    height: 15px;
    border-radius: 3px;
    border: 2px solid #ffc083;
  }
  input[id="checkbox"]:checked + label {
    background: #ababab;
  }
  input[id="checkbox"]:checked:after + label {
    content: "\2713";
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .text-detail {
    color: #a0a0a0;
    margin-left: 1rem;
  }
}
</style>
