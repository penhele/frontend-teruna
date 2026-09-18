import { apiClient } from "@/lib/api/api-client";
import { Region } from "../types/region";

export const getRegions = async (): Promise<Region[]> => {
  const { data } = await apiClient.get("/regions");

  return data;
};
