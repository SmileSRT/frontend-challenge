import type { FC } from "react";
import useCatsStore from "../../app/cats-store";
import CatImageList from "../home/ui/cat-image-list";

const FavoritesPage: FC = () => {
  const favoriteCats = useCatsStore((state) => state.favoriteCats);

  return <CatImageList items={favoriteCats} />;
};

export default FavoritesPage;
