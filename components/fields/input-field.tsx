import { useFieldContext } from "@/hooks/use-app-form";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { cn } from "cn";

interface Props {
  label: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export default function InputField({
  label,
  placeholder,
  className,
  disabled,
}: Props) {
  const field = useFieldContext<string>();

  return (
    <Field className={cn(className)}>
      <FieldLabel>{label}</FieldLabel>
      <Input
        placeholder={placeholder}
        value={field.state.value}
        onChange={(e) => {
          field.handleChange(e.target.value);
        }}
        disabled={disabled}
      />
    </Field>
  );
}
