import React from "react";
import styles from "./Description.module.scss";

type Props = {
  text: string;
  bold: boolean;
  style?: object;
};

const Description = ({ text, bold, style }: Props) => {
  return (
    <div className={styles.Description}>
      <div
        className={bold ? [styles.text, styles.bold].join(" ") : styles.text}
        style={{ ...style }}
      >
        {text}
      </div>
    </div>
  );
};

export default Description;
