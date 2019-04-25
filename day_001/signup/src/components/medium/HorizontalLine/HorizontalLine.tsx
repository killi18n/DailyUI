import React from "react";
import styles from "./HorizontalLine.module.scss";

type Props = {
  children: JSX.Element[] | JSX.Element;
  style?: object;
};

const HorizontalLine = ({ children, style }: Props) => {
  return (
    <div className={styles.HorizontalLine} style={{ ...style }}>
      {children}
    </div>
  );
};

export default HorizontalLine;
