import { queryOptions, useQuery } from "@tanstack/react-query";
import { getCongregations } from "../api/congregation";

export const useCongregations = () => {
  return useQuery(
    queryOptions({
      queryKey: ["congregations"],
      queryFn: () => getCongregations(),
      staleTime: 1000 * 60 * 5,
    }),
  );
};
