import { FieldGroup } from "@/components/ui/field";
import { toast } from "@/components/ui/toast";
import { useAppForm } from "@/hooks/use-app-form";
import { useMutation } from "@tanstack/react-query";
import { addCongregation } from "../api/congregation";
import { useRegions } from "@/features/region/hooks/use-regions";
import { usePelkat } from "@/features/pelkat/hooks/use-pelkat";

export default function AddCongregationForm() {
  const { mutateAsync } = useMutation({
    mutationFn: addCongregation,
  });

  const form = useAppForm({
    defaultValues: {
      name: "",
      phone: "",
      birth: "",
      regionId: "",
      pelkatId: "",
    },

    onSubmit: ({ value }) => {
      toast.promise(mutateAsync(value), {
        loading: "Menambahkan data...",
        success: "Data berhasil ditambahkan",
        error: "Gagal menambahkan data",
      });
    },
  });

  const { data: regions = [] } = useRegions();
  const regionItems = regions.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const { data: pelkat = [] } = usePelkat();
  const pelkatItems = pelkat.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  return (
    <form.AppForm>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup className="">
          <form.AppField name="name">
            {(field) => <field.InputField label="Nama Lengkap" />}
          </form.AppField>

          <form.AppField name="birth">
            {(field) => <field.InputField label="Tanggal Lahir" />}
          </form.AppField>

          <form.AppField name="phone">
            {(field) => <field.InputField label="No. HP" />}
          </form.AppField>

          <form.AppField name="regionId">
            {(field) => (
              <field.SelectField label="Sektor" items={regionItems} />
            )}
          </form.AppField>

          <form.AppField name="pelkatId">
            {(field) => (
              <field.SelectField label="Pelkat" items={pelkatItems} />
            )}
          </form.AppField>
        </FieldGroup>

        <form.SubmitButton />
      </form>
    </form.AppForm>
  );
}
