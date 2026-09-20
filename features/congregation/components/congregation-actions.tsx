"use client";

import { useState } from "react";
import { Ellipsis, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Congregation } from "../types/congregation";
import EditCongregationForm from "./edit-congregation-form";
import { deleteCongregations } from "../api/congregation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/toast";

interface Props {
  congregation: Congregation;
}

export function CongregationActions({ congregation }: Props) {
  const [editOpen, setEditOpen] = useState(false);

  const queryClient = useQueryClient();

  const handleDelete = () => {
    queryClient.invalidateQueries({ queryKey: ["congregations"] });

    toast.promise(deleteCongregations(congregation.id), {
      loading: "Menghapus data...",
      success: "Berhasil menghapus data",
      error: "Gagal menghapus data",
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon-xs">
              <Ellipsis />
            </Button>
          }
        />

        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setEditOpen(true)}>
              Edit
              <DropdownMenuShortcut>
                <Pencil />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive" onClick={handleDelete}>
              Delete
              <DropdownMenuShortcut>
                <Trash2 />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="min-w-xl">
          <DialogHeader>
            <DialogTitle>Edit Data Teruna</DialogTitle>

            <DialogDescription>
              Perbarui data {congregation.name}.
            </DialogDescription>
          </DialogHeader>

          <EditCongregationForm id={congregation.id} />

          <DialogFooter>
            <DialogClose render={<Button variant="outline">Batal</Button>} />

            <Button type="submit" form="edit-congregation-form">
              Simpan Perubahan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
