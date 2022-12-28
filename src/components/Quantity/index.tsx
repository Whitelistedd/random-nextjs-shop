import Add from "@/assets/icons/add.svg";
import Minus from "@/assets/icons/minus.svg";
import React from "react";
import styles from "./Quantity.module.scss";

interface Props {
  quantity: number;
  id: number;
  handleQuantity: (id: number, type: string) => void;
  className: string;
}

export const Quantity: React.FC<Props> = ({
  className,
  quantity,
  id,
  handleQuantity,
}) => {
  return (
    <div className={`${styles.quantity}  ${className}`}>
      <div className={styles.quantity_actions}>
        <Minus onClick={() => handleQuantity(id, "rem")} />
      </div>
      {quantity}
      <div className={styles.quantity_actions}>
        <Add onClick={() => handleQuantity(id, "add")} />
      </div>
    </div>
  );
};
