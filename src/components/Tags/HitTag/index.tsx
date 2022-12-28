import Tag from "@/assets/icons/hitTag.svg";
import styles from "./HitTag.module.scss";

export const HitTag = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_tag}>
        <div className={styles.container_label}>Хит</div>
        {/* <Tag className={styles.popularTag_tag} /> */}
      </div>
      <div className={styles.container_rightTag}></div>
    </div>
  );
};
