import React from "react";
import styles from "./Title.module.scss";

type Props = {
  type: string;
};

const Title = ({ type }: Props) => {
  return (
    <div className={styles.Title}>
      {type === "login" ? (
        <div className={styles.TitleSelector}>
          <div className={[styles.TitleLabel, styles.Big].join(" ")}>
            LOG IN
          </div>
          <div className={styles.TitleLabel}>Sign up</div>
        </div>
      ) : (
        <div className={styles.TitleSelector}>
          <div className={styles.TitleLabel}>Log in</div>
          <div className={[styles.TitleLabel, styles.Big].join(" ")}>
            SIGN UP
          </div>
        </div>
      )}
    </div>
  );
};

export default Title;
