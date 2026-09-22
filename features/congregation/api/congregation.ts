import { apiClient } from "@/lib/api/api-client";
import { Congregation } from "../types/congregation";
import { CreateCongregationPayload } from "../types/create-congregation-payload";
import { UpdateCongregationPayload } from "../types/update-congregation-payload";

export const getCongregations = async (): Promise<Congregation[]> => {
  const { data } = await apiClient.get("/congregations");

  return data;
};

export const getCongregation = async (id: string): Promise<Congregation> => {
  const { data } = await apiClient.get(`/congregations/${id}`);

  return data;
};

export const addCongregation = async (body: CreateCongregationPayload) => {
  const { data } = await apiClient.post("/congregations", body);

  return data;
};

export const updateCongregation = async (
  id: string,
  body: UpdateCongregationPayload,
) => {
  const { data } = await apiClient.patch(`/congregations/${id}`, body);

  return data;
};

export const deleteCongregations = async (id: string) => {
  const { data } = await apiClient.delete(`/congregations/${id}`);

  return data;
};
