"use client";

import { DataTable } from "@/components/layouts/data-table";
import { Button } from "@/components/ui/button";
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
import AddCongregationForm from "@/features/congregation/components/add-congregation-form";
import { columms } from "@/features/congregation/components/columns";
import { useCongregations } from "@/features/congregation/hooks/use-congregations";

export default function Page() {
  const { data } = useCongregations();

  return (
    <div className="space-y-2">
      <div className="">
        <h1 className="text-2xl font-bold">Database Persekutuan Teruna</h1>
        <p className="text-muted-foreground text-sm">
          Pengelolaan data Persekutuan Teruna GPIB Maranatha Jakarta
        </p>
      </div>

      <Dialog>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <DialogTrigger render={<Button>Tambah Teruna Baru</Button>} />

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
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>

      <DataTable columns={columms} data={data ?? []} />
    </div>
  );
}
