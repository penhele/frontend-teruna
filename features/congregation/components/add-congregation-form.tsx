import { toast } from "@/components/ui/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCongregation } from "../api/congregation";
import CongregationForm from "./congregation-form";

export default function AddCongregationForm() {
  const { mutateAsync } = useMutation({
    mutationFn: addCongregation,
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
        name: "",
        birth: "",
        phone: "",
        pelkatId: "82e63a9b-9823-4699-b040-eddb076a33b1",
        regionId: "",
      }}
      onSubmit={handleSubmit}
      formId="add-congregation-form"
    />
  );
}
