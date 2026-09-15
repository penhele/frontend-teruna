import { DataTable } from "@/components/layouts/data-table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { columms } from "@/features/congregation/columns";

export default function Page() {
  const data = [
    {
      id: "a5fbf184-fad2-49a5-a761-7a4e294225ef",
      name: "Stephen Helenus",
      phone: "0818355788",
      birth: "2000-01-01T00:00:00.000Z",
      regionId: "7213c279-4c85-4ebd-8ce9-ecfe45fb92d5",
      pelkatId: "aa095f63-ac60-4d05-8ff3-2c716ea9806e",
      createdAt: "2026-06-16T08:03:04.348Z",
      updatedAt: "2026-06-16T08:03:04.348Z",

      region: {
        id: "7213c279-4c85-4ebd-8ce9-ecfe45fb92d5",
        name: "4",
        createdAt: "2026-06-16T08:01:37.837Z",
        updatedAt: "2026-06-16T08:01:37.837Z",
      },

      pelkat: {
        id: "aa095f63-ac60-4d05-8ff3-2c716ea9806e",
        name: "Gerakan Pemuda",
        description: "Pelayanan kategori Gerakan Pemuda",
        createdAt: "2026-06-16T08:00:46.339Z",
        updatedAt: "2026-06-16T08:00:46.339Z",
      },

      leadership: {
        id: "f02040bf-9f45-4488-ad7c-d54fd5ff5078",
        positionId: "4f889d3a-0521-4dd4-ae59-f2c02362f769",
        congregationId: "a5fbf184-fad2-49a5-a761-7a4e294225ef",
        pelkatId: "82e63a9b-9823-4699-b040-eddb076a33b1",
        createdAt: "2026-06-16T08:26:54.531Z",
        updatedAt: "2026-06-16T08:26:54.531Z",
      },
    },

    {
      id: "b6fcf295-fbd3-50b6-b872-8b5f305336f0",
      name: "Ivana",
      phone: "081298765432",
      birth: "2004-08-15T00:00:00.000Z",
      regionId: "8324d38a-5d96-4fce-9fda-fd05ef43a6e6",
      pelkatId: "bb186g74-bd71-5e16-90f4-3d827ea9817f",
      createdAt: "2026-06-17T09:10:22.348Z",
      updatedAt: "2026-06-17T09:10:22.348Z",

      region: {
        id: "8324d38a-5d96-4fce-9fda-fd05ef43a6e6",
        name: "6",
        createdAt: "2026-06-17T09:08:37.837Z",
        updatedAt: "2026-06-17T09:08:37.837Z",
      },

      pelkat: {
        id: "bb186g74-bd71-5e16-90f4-3d827ea9817f",
        name: "Persekutuan Wanita",
        description: "Pelayanan kategori Persekutuan Wanita",
        createdAt: "2026-06-17T09:07:46.339Z",
        updatedAt: "2026-06-17T09:07:46.339Z",
      },

      leadership: null,
    },

    {
      id: "c7gdg306-gce4-61c7-c983-9c6g41644701",
      name: "Daniel Pratama",
      phone: "082112345678",
      birth: "1998-03-22T00:00:00.000Z",
      regionId: "9435e49b-6ea7-50df-a0eb-ge16fg54b7f7",
      pelkatId: "cc297h85-ce82-6f27-a1g5-4e938fb0928g",
      createdAt: "2026-06-18T10:15:12.348Z",
      updatedAt: "2026-06-18T10:15:12.348Z",

      region: {
        id: "9435e49b-6ea7-50df-a0eb-ge16fg54b7f7",
        name: "2",
        createdAt: "2026-06-18T10:12:37.837Z",
        updatedAt: "2026-06-18T10:12:37.837Z",
      },

      pelkat: {
        id: "cc297h85-ce82-6f27-a1g5-4e938fb0928g",
        name: "Persekutuan Teruna",
        description: "Pelayanan kategori Persekutuan Teruna",
        createdAt: "2026-06-18T10:11:46.339Z",
        updatedAt: "2026-06-18T10:11:46.339Z",
      },

      leadership: {
        id: "d8hehe17-hdf5-72d8-d094-0d7h52755812",
        positionId: "5g990e4b-1632-5ee5-bf80-t3d23462e870",
        congregationId: "c7gdg306-gce4-61c7-c983-9c6g41644701",
        pelkatId: "cc297h85-ce82-6f27-a1g5-4e938fb0928g",
        createdAt: "2026-06-18T10:20:54.531Z",
        updatedAt: "2026-06-18T10:20:54.531Z",
      },
    },

    {
      id: "e9ifif28-ieg6-83e9-e1a5-1e8i63866923",
      name: "Maria Angelica",
      phone: "081377889900",
      birth: "1995-11-08T00:00:00.000Z",
      regionId: "a154f5ac-7fb8-61eg-b1fc-hf27gh65c8g8",
      pelkatId: "dd308i96-df93-7g38-b2h6-5f049gc1839i",
      createdAt: "2026-06-19T11:20:42.348Z",
      updatedAt: "2026-06-19T11:20:42.348Z",

      region: {
        id: "a154f5ac-7fb8-61eg-b1fc-hf27gh65c8g8",
        name: "3",
        createdAt: "2026-06-19T11:18:37.837Z",
        updatedAt: "2026-06-19T11:18:37.837Z",
      },

      pelkat: {
        id: "dd308i96-df93-7g38-b2h6-5f049gc1839i",
        name: "Persekutuan Kaum Bapak",
        description: "Pelayanan kategori Persekutuan Kaum Bapak",
        createdAt: "2026-06-19T11:17:46.339Z",
        updatedAt: "2026-06-19T11:17:46.339Z",
      },

      leadership: null,
    },

    {
      id: "f0jgj039-jfh7-94f0-f2b6-2f9j74977034",
      name: "Jonathan Wijaya",
      phone: "085712345678",
      birth: "1987-06-17T00:00:00.000Z",
      regionId: "b265g6bd-8gc9-72fh-c2gd-ig38hi76d9h9",
      pelkatId: "ee419j07-ega4-8h49-c3i7-6g150hd2940j",
      createdAt: "2026-06-20T12:25:32.348Z",
      updatedAt: "2026-06-20T12:25:32.348Z",

      region: {
        id: "b265g6bd-8gc9-72fh-c2gd-ig38hi76d9h9",
        name: "1",
        createdAt: "2026-06-20T12:23:37.837Z",
        updatedAt: "2026-06-20T12:23:37.837Z",
      },

      pelkat: {
        id: "ee419j07-ega4-8h49-c3i7-6g150hd2940j",
        name: "Gerakan Pemuda",
        description: "Pelayanan kategori Gerakan Pemuda",
        createdAt: "2026-06-20T12:22:46.339Z",
        updatedAt: "2026-06-20T12:22:46.339Z",
      },

      leadership: null,
    },
  ];

  return (
    <div className="space-y-2">
      <div className="">
        <h1 className="text-2xl font-bold">Database Persekutuan Teruna</h1>
        <p className="text-muted-foreground text-sm">
          Pengelolaan data Persekutuan Teruna GPIB Maranatha Jakarta
        </p>
      </div>

      <Dialog>
        <form action="">
          <DialogTrigger render={<Button>Tambah Teruna Baru</Button>} />

          <DialogContent className={"min-w-xl"}>
            <DialogHeader>
              <DialogTitle>Pendaftaran Teruna Baru</DialogTitle>
              <DialogDescription>
                Lengkapi formulir di bawah ini untuk menambahkan data jemaat ke
                Pelkat Persekutuan Teruna GPIB Maranatha Jakarta
              </DialogDescription>
            </DialogHeader>

            <FieldGroup className="grid grid-cols-6">
              <Field className="col-span-6">
                <FieldLabel>Nama Lengkap</FieldLabel>
                <Input />
              </Field>
              <Field className="col-span-3">
                <FieldLabel>Nama Panggilan</FieldLabel>
                <Input />
              </Field>
              <Field className="col-span-3">
                <FieldLabel>No. HP</FieldLabel>
                <Input />
              </Field>
              <Field className="col-span-2">
                <FieldLabel>Jenis Kelamin</FieldLabel>
                <Select
                  items={[
                    { label: "Laki-laki", value: "laki-laki" },
                    { label: "Perempuan", value: "perempuan" },
                  ]}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      {[
                        { label: "Laki-laki", value: "laki-laki" },
                        { label: "Perempuan", value: "perempuan" },
                      ].map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field className="col-span-2">
                <FieldLabel>Tanggal Lahir</FieldLabel>
                <Input />
              </Field>
              <Field className="col-span-2">
                <FieldLabel>Kelas</FieldLabel>
                <Input />
              </Field>
              <Field className="col-span-3">
                <FieldLabel>Sektor</FieldLabel>
                <Input />
              </Field>
              <Field className="col-span-3">
                <FieldLabel>Status Keaktifan</FieldLabel>
                <Input />
              </Field>
            </FieldGroup>

            <DialogFooter>
              <DialogClose
                render={<Button variant={"outline"}>Cancel</Button>}
              />
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>

      <DataTable columns={columms} data={data} />
    </div>
  );
}
