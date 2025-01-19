import { create } from "zustand";
import type { ICatsStore } from "./types";
import { CatsService } from "../api/cats.service";

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
