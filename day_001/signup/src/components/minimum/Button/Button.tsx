import React from "react";
import styles from "./Button.module.scss";

type Props = {
  children: JSX.Element[] | JSX.Element | string;
  style: object;
};

const Button = ({ children, style }: Props) => {
  return (
    <div className={styles.Button} style={{ ...style }}>
      {children}
    </div>
  );
};

export default Button;
