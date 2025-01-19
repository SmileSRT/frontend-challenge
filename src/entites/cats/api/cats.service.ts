import { apiClient } from "../../../shared/api-client";
import type { ICatItem } from "../model/types";

export class CatsService {
  static async fetchList() {
    const url = `${
      import.meta.env.VITE_API_HOSTNAME
    }/images/search?limit=50&page=1`;

    const data = await apiClient.get<ICatItem[]>(url);

    return data;
  }
}
