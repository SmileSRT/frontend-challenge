import { useEffect, useState, type FC } from "react";
import { CatsService, ICatItem } from "./api/cats.service";
import CatImageList from "./ui/cat-image-list";

const HomePage: FC = () => {
  const [catItems, setCatItems] = useState<ICatItem[]>([]);

  const fetchListItems = async () => {
    const data = await CatsService.fetchList();

    if (data) {
      setCatItems(data);
    }
  };

  useEffect(() => {
    fetchListItems();
  }, []);
  return <CatImageList items={catItems} />;
};

export default HomePage;
