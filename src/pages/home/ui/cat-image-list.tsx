import type { FC } from "react";
import type { ICatItem } from "../api/cats.service";
import styles from "./image.module.css";
import HeartIcon from "./heart-button";
import useCatsStore from "../../../app/cats-store";

const LikeButton: FC<{
  like: () => void;
  dislike: () => void;
  isLiked: boolean;
}> = ({ like, dislike, isLiked }) => {
  const activeStyle = [styles.heart__button, styles.active].join(" ");

  const likeHandler = () => {
    const handler = isLiked ? dislike : like;

    handler();
  };

  return (
    <button
      className={isLiked ? activeStyle : styles.heart__button}
      onClick={() => likeHandler()}
    >
      <HeartIcon isLiked={isLiked} />
    </button>
  );
};

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
