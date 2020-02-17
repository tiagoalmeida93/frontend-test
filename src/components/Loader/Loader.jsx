import React from "react";
import styles from "./styles.scss";

export default function Loader(props) {
  return (
    <div className={styles.loader}>
      <p>{props.loaderMessage}</p>
      <svg className={styles.spinner} viewBox="0 0 50 50">
        <circle
          className={styles.path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}
