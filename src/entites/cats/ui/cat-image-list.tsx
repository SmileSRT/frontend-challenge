import type { FC } from "react";
import styles from "./cat-list.module.css";
import LikeButton from "../../../shared/ui/like-button";
import useCatsStore from "../model/cats-store";
import type { ICatItem } from "../model/types";

const CatImageTile: FC<{ item: ICatItem }> = ({ item }) => {
  const { like, dislike, favoriteCats } = useCatsStore();
  const isLiked = favoriteCats.includes(item);

  return (
    <div className={styles.tile__container}>
      <img
        width={225}
        height={225}
        src={item.url}
        className={styles.image__tile}
      />
      <LikeButton
        like={() => like(item)}
        dislike={() => dislike(item.id)}
        isLiked={isLiked}
      />
    </div>
  );
};

const CatImageList: FC<{ items: ICatItem[] }> = ({ items }) => {
  return (
    <ul className={styles.list__container}>
      {items.map((item) => (
        <li key={item.id}>
          <CatImageTile item={item} />
        </li>
      ))}
    </ul>
  );
};

export default CatImageList;
