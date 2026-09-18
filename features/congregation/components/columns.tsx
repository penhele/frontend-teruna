"use client";

import { type DataTableFeatures } from "@/components/layouts/data-table-features";
import { formatDate } from "@/lib/utils/date";
import { createColumnHelper } from "@tanstack/react-table";
import { Congregation } from "../types/congregation";

const columnHelper = createColumnHelper<DataTableFeatures, Congregation>();

export const columms = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "Nama Lengkap",
  }),
  columnHelper.accessor("phone", {
    header: "Kontak",
  }),
  columnHelper.accessor("birth", {
    header: "Tanggal Lahir",
    cell: ({ row }) => {
      return <span>{formatDate(row.getValue("birth"))}</span>;
    },
  }),

  columnHelper.accessor("region.name", {
    header: "Sektor",
    cell: ({ row }) => {
      return <span>Sektor {row.original.region.name}</span>;
    },
  }),

  columnHelper.accessor("pelkat.name", {
    header: "Pelkat",
    cell: ({ row }) => {
      return <span>{row.original.pelkat.name}</span>;
    },
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
