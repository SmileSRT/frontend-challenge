import { create } from "zustand";
import { CatsService, ICatItem } from "../pages/home/api/cats.service";

interface ICatsStore {
  cats: ICatItem[];
  favoriteCats: ICatItem[];
  fetchCats: () => void;
  like: (item: ICatItem) => void;
  dislike: (id: string) => void;
}

const useCatsStore = create<ICatsStore>((set) => ({
  cats: [],
  favoriteCats: [],
  fetchCats: async () => {
    const data = await CatsService.fetchList();

    if (data) {
      set({ cats: data });
    }
  },
  like: (item) =>
    set((state) => ({ favoriteCats: [...state.favoriteCats, item] })),
  dislike: (id) =>
    set((state) => ({
      favoriteCats: state.favoriteCats.filter((item) => item.id !== id),
    })),
}));

export default useCatsStore;
