import React from "react";
import styles from "./Wrapper.module.scss";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Wrapper = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
