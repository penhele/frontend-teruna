import { FieldGroup } from "@/components/ui/field";
import { usePelkat } from "@/features/pelkat/hooks/use-pelkat";
import { useRegions } from "@/features/region/hooks/use-regions";
import { useAppForm } from "@/hooks/use-app-form";

interface Props {
  defaultValues: {
    name: string;
    birth: string;
    phone: string;
    regionId: string;
    pelkatId: string;
  };
  onSubmit: (values: {
    name: string;
    birth: string;
    phone: string;
    regionId: string;
    pelkatId: string;
  }) => void;
  formId: string;
}

export default function CongregationForm({
  onSubmit,
  defaultValues,
  formId,
}: Props) {
  const form = useAppForm({
    defaultValues: defaultValues,
    onSubmit: ({ value }) => {
      onSubmit(value);
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
        id={formId}
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup className="grid grid-cols-2">
          <form.AppField name="name">
            {(field) => (
              <field.InputField
                label="Nama Lengkap"
                placeholder="Masukkan nama lengkap"
                className="col-span-2"
              />
            )}
          </form.AppField>

          <form.AppField name="birth">
            {(field) => (
              <field.CalendarField
                placeholder="Pilih tanggal lahir"
                label="Tanggal Lahir"
              />
            )}
          </form.AppField>

          <form.AppField name="phone">
            {(field) => (
              <field.InputField
                label="No. HP"
                placeholder="Masukkan nomor HP"
              />
            )}
          </form.AppField>

          <form.AppField name="regionId">
            {(field) => (
              <field.SelectField
                label="Sektor"
                items={regionItems}
                placeholder="Pilih Sektor"
              />
            )}
          </form.AppField>

          <form.AppField name="pelkatId">
            {(field) => (
              <field.SelectField
                label="Pelkat"
                items={pelkatItems}
                placeholder="Pilih Pelkat"
              />
            )}
          </form.AppField>
        </FieldGroup>
      </form>
    </form.AppForm>
  );
}
