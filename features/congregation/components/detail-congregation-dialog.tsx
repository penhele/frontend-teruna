import DisplayField from "@/components/fields/display-field";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FieldGroup } from "@/components/ui/field";
import { formatDate } from "@/lib/utils/format-date";
import { Congregation } from "../types/congregation";

interface Props {
  congregation: Congregation;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CongregationDetailDialog({
  congregation,
  open,
  onOpenChange,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={"min-w-xl"}>
        <DialogHeader>
          <DialogTitle>Detail Data Teruna</DialogTitle>
          <DialogDescription>
            Informasi lengkap mengenai data teruna yang terdaftar pada
            Persekutuan Teruna
          </DialogDescription>
        </DialogHeader>

        <div className="">
          <FieldGroup className="grid grid-cols-2 gap-4">
            <DisplayField
              label="ID"
              value={congregation.id}
              className="col-span-2"
            />
            <DisplayField
              label="Nama"
              value={congregation.name}
              className="col-span-2"
            />
            <DisplayField
              label="Phone"
              value={congregation.phone}
              isPhoneNumber
            />
            <DisplayField
              label="Tanggal Lahir"
              value={formatDate(congregation.birth)}
            />
            <DisplayField label="Aktif" value={congregation.isActive} />
            <DisplayField label="sektor" value={congregation.region.name} />
            <DisplayField
              label="Pelkat"
              value={congregation.pelkat.name}
              className="col-span-2"
            />
          </FieldGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
}
