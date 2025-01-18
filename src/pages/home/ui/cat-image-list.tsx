import type { FC } from "react";
import type { ICatItem } from "../api/cats.service";
import styles from "./image.module.css";

const CatImageTile: FC<ICatItem> = ({ url }) => {
  return (
    <>
      <img width={255} height={255} src={url} className={styles.image__tile} />
    </>
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
