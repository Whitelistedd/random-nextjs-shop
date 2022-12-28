import Tag from "@/assets/icons/tag.svg";
import styles from "./SaleTag.module.scss";

interface Props {
  sale: string;
  className?: string;
}

export const SaleTag: React.FC<Props> = ({ sale, className }) => {
  return (
    <div className={`${className} ${styles.saleTag}`}>
      <div className={styles.saleTag_label}>{sale}%</div>
    </div>
  );
};
