export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");

  if (!digits) return "";

  let number = digits;

  if (number.startsWith("0")) {
    number = number.slice(1);
  } else if (number.startsWith("62")) {
    number = number.slice(2);
  }

  if (!number) return "+62";

  const groups = number.match(/.{1,4}/g) ?? [];

  return `+62 ${groups.join("-")}`;
}
