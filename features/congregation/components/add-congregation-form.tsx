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
        pelkatId: "",
        regionId: "",
      }}
      onSubmit={handleSubmit}
      formId="add-congregation-form"
    />
  );
}
