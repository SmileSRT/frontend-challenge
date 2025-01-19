import { useEffect, type FC } from "react";
import CatImageList from "./ui/cat-image-list";
import useCatsStore from "../../app/cats-store";

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
