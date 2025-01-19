export interface ICatItem {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface ICatsStore {
  cats: ICatItem[];
  favoriteCats: ICatItem[];
  fetchCats: () => void;
  like: (item: ICatItem) => void;
  dislike: (id: string) => void;
}
