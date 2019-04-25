import React from "react";
import styles from "./SocialConnectBox.module.scss";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const SocialConnectBox = ({ children }: Props) => {
  return <div className={styles.SocialConnectBox}>{children}</div>;
};

export default SocialConnectBox;
