import { useEffect, type FC } from "react";
import CatImageList from "../../entites/cats/ui/cat-image-list";
import useCatsStore from "../../entites/cats/model/cats-store";

const HomePage: FC = () => {
  const { cats, fetchCats } = useCatsStore();

  useEffect(() => {
    if (!cats.length) {
      fetchCats();
    }
  }, [fetchCats, cats]);

  return <CatImageList items={cats} />;
};

export default HomePage;
