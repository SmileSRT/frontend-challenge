import { useState, type FC } from "react";
import type { ICatItem } from "../api/cats.service";
import styles from "./image.module.css";
import HeartIcon from "./heart-button";

const HeartButton: FC = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const activeStyle = [styles.heart__button, styles.active].join(" ");

  return (
    <button
      className={isLiked ? activeStyle : styles.heart__button}
      onClick={() => setIsLiked(!isLiked)}
    >
      <HeartIcon isLiked={isLiked} />
    </button>
  );
};

const CatImageTile: FC<ICatItem> = ({ url }) => {
  return (
    <div className={styles.tile__container}>
      <img width={225} height={225} src={url} className={styles.image__tile} />
      <HeartButton />
    </div>
  );
};

const CatImageList: FC<{ items: ICatItem[] }> = ({ items }) => {
  return (
    <ul className={styles.list__container}>
      {items.map((item) => (
        <li key={item.id}>
          <CatImageTile {...item} />
        </li>
      ))}
    </ul>
  );
};

export default CatImageList;
