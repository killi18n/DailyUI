import React from "react";
import { FaFacebook, FaGooglePlus, FaTwitterSquare } from "react-icons/fa";
import styles from "./SocialButton.module.scss";

type Props = {
  type: string;
};

const SocialButton = ({ type }: Props) => {
  return (
    <div className={styles.SocialButton}>
      {type === "facebook" ? (
        <FaFacebook />
      ) : type === "google" ? (
        <FaGooglePlus />
      ) : (
        <FaTwitterSquare />
      )}
    </div>
  );
};

export default SocialButton;
