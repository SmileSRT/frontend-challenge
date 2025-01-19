import type { FC } from "react";
import HeartIcon from "./heart-icon";
import styles from "./styles/like-button.module.css";

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
      onClick={likeHandler}
    >
      <HeartIcon isLiked={isLiked} />
    </button>
  );
};

export default LikeButton;
