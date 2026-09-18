import { FieldGroup } from "@/components/ui/field";
import { useAppForm } from "@/hooks/use-app-form";

export default function AddCongregationForm() {
  const form = useAppForm({
    defaultValues: {
      name: "",
      phone: "",
      birth: "",
    },
  });

  return (
    <form.AppForm>
      <form action="">
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
        </FieldGroup>
      </form>
    </form.AppForm>
  );
}
