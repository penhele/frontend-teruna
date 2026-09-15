"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { type DataTableFeatures } from "@/components/layouts/data-table-features";
import { Congregation } from "../types/congregation";

const columnHelper = createColumnHelper<DataTableFeatures, Congregation>();

export const columms = columnHelper.columns([
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("phone", {
    header: "Kontak",
  }),
  columnHelper.accessor("birth", {
    header: "Tanggal Lahir",
  }),

  columnHelper.display({
    id: "age",
    header: "Umur",
    cell: ({ row }) => {
      const birthDate = new Date(row.original.birth);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();

      const hasHadBirthday =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
          today.getDate() >= birthDate.getDate());

      if (!hasHadBirthday) {
        age--;
      }

      return <span>{age} tahun</span>;
    },
  }),
]);
