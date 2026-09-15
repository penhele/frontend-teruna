import { apiClient } from "@/lib/api/api-client";
import { Congregation } from "../types/congregation";

export const getCongregations = async (): Promise<Congregation[]> => {
  const { data } = await apiClient.get("/congregations");

  return data;
};

export const addCongregation = async () => {
  const { data } = await apiClient.post("/congregations");

  return data;
};
