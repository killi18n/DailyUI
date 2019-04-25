import React from "react";
import styles from "./LabelWithField.module.scss";
import Label from "../../minimum/Label";
import Field from "../../minimum/Field";

type Props = {
  label: string;
};

const LabelWithField = ({ label }: Props) => {
  return (
    <div className={styles.LabelWithField}>
      <Label label={label} />
      <Field />
    </div>
  );
};

export default LabelWithField;
