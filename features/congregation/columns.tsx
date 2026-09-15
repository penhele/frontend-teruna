"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { type DataTableFeatures } from "@/components/layouts/data-table-features";

export type Congregation = {
  id: string;
  name: string;
  class: string;
  gender: string;
  birth: string;
  sektor: string;
  phone: string;
  isActive: boolean;
  isSidi: boolean;
  sidiYear: number | null;
};

const columnHelper = createColumnHelper<DataTableFeatures, Congregation>();

export const columms = columnHelper.columns([
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.display({
    header: "Nama",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-semibold">{row.original.name}</span>
        <span>{row.original.gender}</span>
      </div>
    ),
  }),
  columnHelper.accessor("class", {
    header: "Kelas",
    cell: ({ row }) => {
      return (
        <Badge
          className={
            row.original.class === "EKA"
              ? "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
              : "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
          }
        >
          {row.original.class}
        </Badge>
      );
    },
  }),
  columnHelper.accessor("sektor", {
    header: "Sektor",
    cell: ({ row }) => <p>Sektor {row.getValue("sektor")}</p>,
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

  columnHelper.accessor("isSidi", {
    header: "Sidi",
  }),
  columnHelper.accessor("sidiYear", {
    header: "Tahun Sidi",
  }),
]);
