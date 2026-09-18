import { queryOptions, useQuery } from "@tanstack/react-query";
import { getAllPelkat } from "../api/pelkat";

export const usePelkat = () => {
  return useQuery(
    queryOptions({
      queryKey: ["pelkat"],
      queryFn: () => getAllPelkat(),
      staleTime: 1000 * 60 * 5,
    }),
  );
};
