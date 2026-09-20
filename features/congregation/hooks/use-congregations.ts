import { queryOptions, useQuery } from "@tanstack/react-query";
import { getCongregation, getCongregations } from "../api/congregation";

export const useCongregations = () => {
  return useQuery(
    queryOptions({
      queryKey: ["congregations"],
      queryFn: () => getCongregations(),
      staleTime: 1000 * 60 * 5,
    }),
  );
};

export const useCongregation = (id: string) => {
  return useQuery(
    queryOptions({
      queryKey: ["congregation"],
      queryFn: () => getCongregation(id),
      staleTime: 1000 * 60 * 5,
    }),
  );
};
