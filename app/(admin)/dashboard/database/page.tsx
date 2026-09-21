"use client";

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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddCongregationForm from "@/features/congregation/components/add-congregation-form";
import { columms } from "@/features/congregation/components/columns";
import { useCongregations } from "@/features/congregation/hooks/use-congregations";
import { UserPlus } from "lucide-react";

export default function Page() {
  const { data } = useCongregations();

  return (
    <div className="space-y-4">
      <div className="">
        <h1 className="text-2xl font-bold">Database Persekutuan Teruna</h1>
        <p className="text-muted-foreground text-sm">
          Pengelolaan data Persekutuan Teruna GPIB Maranatha Jakarta
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>10</CardTitle>
            <CardDescription>Total Teruna</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10</CardTitle>
            <CardDescription>Aktif</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10</CardTitle>
            <CardDescription>Tidak aktif</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10</CardTitle>
            <CardDescription>Ulang tahun bulan ini</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="space-y-4">
        <Dialog>
          <DialogTrigger
            render={
              <Button>
                <UserPlus /> Tambah Teruna Baru
              </Button>
            }
          />

          <DialogContent className={"min-w-xl"}>
            <DialogHeader>
              <DialogTitle>Pendaftaran Teruna Baru</DialogTitle>
              <DialogDescription>
                Lengkapi formulir di bawah ini untuk menambahkan data jemaat ke
                Pelkat Persekutuan Teruna GPIB Maranatha Jakarta
              </DialogDescription>
            </DialogHeader>

            <AddCongregationForm />

            <DialogFooter>
              <DialogClose
                render={<Button variant={"outline"}>Cancel</Button>}
              />
              <Button type="submit" form="add-congregation-form">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable columns={columms} data={data ?? []} />
    </div>
  );
}
