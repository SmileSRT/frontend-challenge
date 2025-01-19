import type { FC } from "react";
import CatImageList from "../../entites/cats/ui/cat-image-list";
import useCatsStore from "../../entites/cats/model/cats-store";

const FavoritesPage: FC = () => {
  const favoriteCats = useCatsStore((state) => state.favoriteCats);

  return <CatImageList items={favoriteCats} />;
};

export default FavoritesPage;
