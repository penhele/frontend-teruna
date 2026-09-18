import { queryOptions, useQuery } from "@tanstack/react-query";
import { getRegions } from "../api/region";

export const useRegions = () => {
  return useQuery(
    queryOptions({
      queryKey: ["regions"],
      queryFn: () => getRegions(),
      staleTime: 1000 * 60 * 5,
    }),
  );
};
