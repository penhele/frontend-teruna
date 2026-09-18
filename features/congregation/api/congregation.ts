import { apiClient } from "@/lib/api/api-client";
import { Congregation } from "../types/congregation";
import { CreateCongregationPayload } from "../types/create-congregation-payload";

export const getCongregations = async (): Promise<Congregation[]> => {
  const { data } = await apiClient.get("/congregations");

  return data;
};

export const addCongregation = async (body: CreateCongregationPayload) => {
  const { data } = await apiClient.post("/congregations", body);

  return data;
};
