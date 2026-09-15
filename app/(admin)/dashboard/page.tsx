import { DataTable } from "@/components/layouts/data-table";
import { columms } from "@/features/congregation/columns";

export default function Page() {
  const data = [
    {
      id: "123456",
      name: "Stephen Helenus",
      class: "EKA",
      gender: "Laki-laki",
      sektor: "4",
      birth: "2004-08-15",
      phone: "081234567890",
      isActive: true,
      isSidi: true,
      sidiYear: 2021,
    },
    {
      id: "345678",
      name: "Ivana",
      class: "DWI",
      gender: "Perempuan",
      sektor: "6",
      birth: "2004-08-15",
      phone: "081298765432",
      isActive: true,
      isSidi: true,
      sidiYear: 2021,
    },
  ];

  return (
    <div className="">
      <DataTable columns={columms} data={data} />
    </div>
  );
}
