import Image from "next/image";
import React from "react";
import { SaleTag } from "../Tags/SaleTag";
import styles from "./Advertisement.module.scss";

interface Props {
  image: string;
  sale: string;
  desc: string;
  reverse?: boolean;
}

export const Advertisement: React.FC<Props> = ({
  image,
  sale,
  desc,
  reverse,
}) => {
  return (
    <div
      className={`${styles.advertisement} ${
        reverse && styles.advertisementReverse
      }`}
    >
      <Image alt="advertisement" width={185} height={142} src={image} />
      <div
        className={`${styles.advertisement_info} ${
          reverse && styles.advertisementReverse_info
        }`}
      >
        <span
          className={`${styles.advertisement_desc} ${
            reverse && styles.advertisementReverse_desc
          }`}
        >
          <SaleTag
            className={`${styles.advertisement_tag} ${
              reverse && styles.advertisementReverse_tag
            }`}
            sale={sale}
          />
          {desc}
        </span>
        <button
          className={`${styles.advertisement_button} ${
            reverse && styles.advertisementReverse_button
          }`}
        >
          Выбрать
        </button>
      </div>
    </div>
  );
};
