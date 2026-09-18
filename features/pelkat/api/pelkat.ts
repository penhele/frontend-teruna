import { apiClient } from "@/lib/api/api-client";
import { Pelkat } from "../types/pelkat";

export const getAllPelkat = async (): Promise<Pelkat[]> => {
  const { data } = await apiClient.get("/pelkat");

  return data;
};
