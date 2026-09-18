import { FieldGroup } from "@/components/ui/field";
import { useAppForm } from "@/hooks/use-app-form";
import { useMutation } from "@tanstack/react-query";
import { addCongregation } from "../apis/congregation";
import { CreateCongregationPayload } from "../types/create-congregation-payload";

export default function AddCongregationForm() {
  const { mutateAsync } = useMutation({
    mutationFn: addCongregation,
  });

  const form = useAppForm({
    defaultValues: {
      name: "",
      phone: "",
      birth: "",
      regionId: "82aed6c8-3bd4-48cd-97ce-a0888581149c",
      pelkatId: "aa095f63-ac60-4d05-8ff3-2c716ea9806e",
    },

    onSubmit: ({ value }) => {
      console.log(value);
      mutateAsync(value);
    },
  });

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
        </FieldGroup>

        <form.SubmitButton />
      </form>
    </form.AppForm>
  );
}
