import { Advertisement } from "../Advertisement";
import Arrow from "@/assets/icons/arrow.svg";
import React from "react";
import styles from "./Section.module.scss";

export const Section = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.section_title}>Всё для комфортной работы</h1>
      <Arrow className={styles.section_arrow} />
      <div className={styles.section_adverts}>
        <Advertisement
          image="/assets/images/ad1.png"
          desc={"товары для кабинета"}
          sale={"- 25"}
        />
        <Advertisement
          reverse={true}
          image="/assets/images/ad2.png"
          desc={"Скидка на периферию для компьютера"}
          sale={"10"}
        />
      </div>
    </div>
  );
};
