import Link from "next/link";
import React from "react";
import Star from "@/assets/icons/star.svg";
import styles from "./Rating.module.scss";

interface Props {
  rating: number;
  reviewsAmount: number;
}

const stars = ["star1", "star2", "star3", "star4", "star5"];

export const Rating: React.FC<Props> = ({ rating, reviewsAmount }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_rating}>
        {stars.map((star, index) =>
          index + 1 <= rating ? (
            <Star className={styles.container_filledStar} key={star} />
          ) : (
            <Star className={styles.container_star} key={star} />
          )
        )}
      </div>
      <Link href="/" className={styles.container_reviews}>
        {reviewsAmount} отзыва
      </Link>
    </div>
  );
};
