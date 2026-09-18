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
}

export default function SelectField({ items, label }: Props) {
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
    </Field>
  );
}
