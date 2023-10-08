import { ICardCountry } from "../@types/card";
import { api } from "../service/api";

const useFetcher = async (url: string): Promise<ICardCountry> => {
  const { data } = await api.get(url);

  return data;
};

export { useFetcher };
