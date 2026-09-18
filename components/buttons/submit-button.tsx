import { useFormContext } from "@/hooks/use-app-form";
import { Button } from "../ui/button";

export default function SubmitButton() {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => ({
        isSubmitting: state.isSubmitting,
        canSubmit: state.canSubmit,
      })}
    >
      {({ isSubmitting, canSubmit }) => {
        const isLoading = isSubmitting;

        return (
          <Button type="submit" disabled={!canSubmit || isLoading}>
            Submit
          </Button>
        );
      }}
    </form.Subscribe>
  );
}
