const get = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(
      error instanceof Error ? error.message : "Что-то пошло не так..."
    );

    return null;
  }
};

export const apiClient = {
  get,
};
