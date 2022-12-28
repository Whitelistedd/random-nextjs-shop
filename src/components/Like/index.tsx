import Heart from "@/assets/icons/heart.svg";
import React from "react";
import styles from "./Like.module.scss";

interface Props {
  liked: boolean;
}

export const Like: React.FC<Props> = ({ liked }) => {
  return (
    <div className={`${styles.like} ${liked && styles.liked}`}>
      <Heart className={styles.heart} />
    </div>
  );
};
