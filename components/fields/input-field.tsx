import { useFieldContext } from "@/hooks/use-app-form";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

interface Props {
  label: string;
  placeholder?: string;
}

export default function InputField({ label, placeholder }: Props) {
  const field = useFieldContext<string>();

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Input
        placeholder={placeholder}
        value={field.state.value}
        onChange={(e) => {
          field.handleChange(e.target.value);
        }}
      />
    </Field>
  );
}
