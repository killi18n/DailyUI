import React from "react";
import styles from "./Label.module.scss";

type Props = {
  label: string;
};

const Label = ({ label }: Props) => {
  return <div className={styles.Label}>{label}</div>;
};

export default Label;
