import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateCongregation } from "@/features/congregation/api/congregation";
import { UpdateCongregationPayload } from "@/features/congregation/types/update-congregation-payload";
import { useAppForm } from "@/hooks/use-app-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "./ui/toast";

type Props = {
  id: string;
  isActive: boolean;
};

export default function ActiveStatus({ id, isActive }: Props) {
  const queryclient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: (body: UpdateCongregationPayload) =>
      updateCongregation(id, body),
    onSuccess() {
      queryclient.invalidateQueries({ queryKey: ["congregations"] });
    },
  });

  const form = useAppForm({
    defaultValues: {
      isActive: isActive ? "active" : "inactive",
    },
  });

  const handleChange = (value: string) => {
    const newIsActive = value === "active";

    toast.promise(
      mutateAsync({
        isActive: newIsActive,
      }),
      {
        loading: "Memperbarui data...",
        success: "Berhasil memperbarui data",
        error: "Gagal memperbarui data",
      },
    );
  };

  const items = [
    { label: "Aktif", value: "active" },
    { label: "Tidak Aktif", value: "inactive" },
  ];

  return (
    <form.AppForm>
      <form action="">
        <form.AppField name="isActive">
          {(field) => (
            <Select
              value={field.state.value}
              onValueChange={(value) => {
                if (!value) return;

                field.handleChange(value);
                handleChange(value);
              }}
              items={items}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  {items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </form.AppField>
      </form>
    </form.AppForm>
  );
}
