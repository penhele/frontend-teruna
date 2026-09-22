import { toast } from "@/components/ui/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCongregation, updateCongregation } from "../api/congregation";
import CongregationForm from "./congregation-form";
import { UpdateCongregationPayload } from "../types/update-congregation-payload";
import { useCongregation } from "../hooks/use-congregations";

interface Props {
  id: string;
}

export default function EditCongregationForm({ id }: Props) {
  const { data: congregation, isPending } = useCongregation(id);

  const { mutateAsync } = useMutation({
    mutationFn: (body: UpdateCongregationPayload) =>
      updateCongregation(id, body),
  });

  const queryClient = useQueryClient();

  const handleSubmit = (value: any) => {
    queryClient.invalidateQueries({ queryKey: ["congregations"] });

    toast.promise(mutateAsync(value), {
      loading: "Menambahkan data...",
      success: "Berhasil menambahkan data",
      error: "Gagal menambahkan data",
    });
  };

  return (
    <CongregationForm
      defaultValues={{
        name: congregation?.name ?? "",
        birth: congregation?.birth ?? "",
        phone: congregation?.phone ?? "",
        pelkatId: congregation?.pelkatId ?? "",
        regionId: congregation?.regionId ?? "",
      }}
      onSubmit={handleSubmit}
      formId="edit-congregation-form"
      isPending={isPending}
    />
  );
}
