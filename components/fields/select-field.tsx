import { useFieldContext } from "@/hooks/use-app-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Field, FieldLabel } from "../ui/field";

interface Props {
  items: { label: string; value: string }[];
  label: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
}

export default function SelectField({
  items,
  label,
  placeholder,
  readOnly,
  disabled,
}: Props) {
  const field = useFieldContext<string>();

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>

      <Select
        items={items}
        value={field.state.value}
        onValueChange={(value) => {
          if (value !== null) {
            field.handleChange(value);
          }
        }}
        readOnly={readOnly}
        disabled={disabled}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
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
    </Field>
  );
}
