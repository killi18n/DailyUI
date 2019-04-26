<template>
  <div class="form">
    <div class="form-inner">
      <div class="form-line-column">
        <Label label="CARD HOLDER *"/>
        <InputField placeholder="Jeff Rosenstock"/>
      </div>
      <div class="form-line-column">
        <Label label="CARD NUMBER *"/>
        <InputField placeholder="0000 0000 0000 0000"/>
      </div>
      <div class="form-line-row">
        <div class="form-line-row-inner">
          <Label label="MONTH/YEAR *"/>
          <InputField placeholder="02/21"/>
        </div>
        <div class="form-line-row-inner">
          <Label label="CVC *"/>
          <InputField placeholder="123"/>
        </div>
      </div>
      <Button text="checkout"></Button>
      <CheckBoxWithDetail/>
    </div>
  </div>
</template>

<script>
import Label from "./Label.vue";
import InputField from "./InputField.vue";
import Button from "./Button.vue";
import CheckBoxWithDetail from "./CheckBoxWithDetail.vue";
export default {
  components: {
    Label,
    InputField,
    Button,
    CheckBoxWithDetail
  }
};
</script>

<style lang="scss">
.form {
  background: #fff;
  flex: 1;

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .form-inner {
    display: flex;
    flex-direction: column;

    width: 65%;

    .form-line-column {
      display: flex;
      flex-direction: column;
      margin-top: 1.5rem;
    }

    .form-line-row {
      display: flex;
      flex-direction: row;
      margin-top: 1.5rem;

      .form-line-row-inner {
        flex: 1;
      }

      .form-line-row-inner + .form-line-row-inner {
        margin-left: 1rem;
      }
    }

    // .form-line-row + .form-line-column {
    //   margin-top: 2.25rem;
    // }
  }
}
</style>


