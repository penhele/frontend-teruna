"use client";

import SektorBadge from "@/components/badges/sektor-badge";
import { type DataTableFeatures } from "@/components/layouts/data-table-features";
import { formatDate } from "@/lib/utils/date";
import { createColumnHelper } from "@tanstack/react-table";
import { Congregation } from "../types/congregation";
import { CongregationActions } from "./congregation-actions";
import ActiveBadge from "@/components/badges/active-badge";
import ActiveStatus from "@/components/active-status";

const columnHelper = createColumnHelper<DataTableFeatures, Congregation>();

export const columms = columnHelper.columns([
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("name", {
    id: "nama",
    header: "Nama Lengkap",
  }),
  columnHelper.accessor("phone", {
    id: "kontak",
    header: "Kontak",
  }),
  columnHelper.accessor("birth", {
    id: "tanggal lahir",
    header: "Tanggal Lahir",
    cell: ({ row }) => {
      return <span>{formatDate(row.original.birth)}</span>;
    },
  }),

  columnHelper.accessor("isActive", {
    id: "aktif",
    header: "Aktif",
    filterFn: (row, columnId, filterValue) => {
      if (filterValue === undefined) return true;
      return Boolean(row.getValue(columnId)) === Boolean(filterValue);
    },
    cell: ({ row }) => {
      return (
        <ActiveStatus id={row.original.id} isActive={row.original.isActive} />
      );
      // return <ActiveBadge isActive={row.original.isActive} />;
    },
  }),

  columnHelper.accessor("isSidi", {
    id: "sidi",
    header: "Sidi",
  }),
  columnHelper.accessor("sidiYear", {
    id: "tahun sidi",
    header: "Tahun Sidi",
  }),

  columnHelper.accessor("region.name", {
    id: "sektor",
    header: "Sektor",
    cell: ({ row }) => {
      // return <span>Sektor {row.original.region.name}</span>;
      return <SektorBadge sektor={row.original.region.name} />;
    },
  }),

  columnHelper.accessor("pelkat.name", {
    id: "pelkat",
    header: "Pelkat",
    cell: ({ row }) => {
      return <span>{row.original.pelkat.name}</span>;
    },
  }),

  columnHelper.display({
    id: "Umur",
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

  columnHelper.display({
    id: "actions",
    header: "",
    cell: ({ row }) => {
      return <CongregationActions congregation={row.original} />;
    },
  }),
]);
