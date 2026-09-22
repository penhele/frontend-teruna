import { formatPhoneNumber } from "@/lib/utils/format-phone-number";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

type Props = {
  label: string;
  value: string | number | boolean;
  className?: string;
  isPhoneNumber?: boolean;
};

export default function DisplayField({
  label,
  value,
  className,
  isPhoneNumber,
}: Props) {
  return (
    <Field className={className}>
      <FieldLabel>{label}</FieldLabel>
      <Input
        className="text-sm"
        value={
          isPhoneNumber ? formatPhoneNumber(value.toString()) : value.toString()
        }
        readOnly
      />
    </Field>
  );
}
