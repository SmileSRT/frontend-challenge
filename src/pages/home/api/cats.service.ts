import { apiClient } from "../../../shared/api-client";

export interface ICatItem {
  id: string;
  url: string;
  width: number;
  height: number;
}

export class CatsService {
  static async fetchList() {
    const url = `${
      import.meta.env.VITE_API_HOSTNAME
    }/images/search?limit=10&page=1`;

    const data = await apiClient.get<ICatItem[]>(url);

    return data;
  }
}
