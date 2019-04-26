<template>
  <div class="header">
    <div class="content-box">
      <div class="back-button">back</div>
      <div class="title">Payment Method</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  width: 100%;
  background: #ff8866;

  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  height: 9.5rem;

  display: flex;
  flex-direction: column;

  .content-box {
    margin-top: 1.5rem;
    margin-left: 1.85rem;
    margin-right: 1.85rem;
    margin-bottom: 1.5rem;
    .back-button {
      color: #ffe3d7;

      font-weight: 600;
      font-size: 1.1rem;
    }

    .title {
      color: #fff4ef;
      margin-top: 1.5rem;
      margin-left: 1rem;
      font-size: 2rem;
      font-weight: 700;
    }
  }
}
</style>
