"use client";

import { useFieldContext } from "@/hooks/use-app-form";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Field, FieldLabel } from "../ui/field";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import { useState } from "react";
import { cn } from "cn";
import { formatDate } from "@/lib/utils/format-date";

interface Props {
  label: string;
  placeholder: string;
  disabled?: boolean;
}

export default function CalendarField({ label, placeholder, disabled }: Props) {
  const field = useFieldContext<string>();

  const currentValue = field.state.value
    ? parseISO(field.state.value)
    : undefined;

  const [calendarMonth, setCalendarMonth] = useState(
    field.state.value ? new Date(field.state.value) : new Date(),
  );

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>

      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant={"outline"}
              className={cn(
                "bg-input/20 justify-start",
                field.state.value ? "font-normal" : "text-muted-foreground",
              )}
            >
              {field.state.value ? formatDate(field.state.value) : placeholder}
            </Button>
          }
        />

        <PopoverContent className={"w-fit"}>
          <Calendar
            mode="single"
            captionLayout="dropdown"
            selected={currentValue}
            month={calendarMonth}
            onMonthChange={setCalendarMonth}
            onSelect={(selectedDate) => {
              if (selectedDate) {
                field.handleChange(selectedDate.toISOString());
                setCalendarMonth(selectedDate);
              }
            }}
            disabled={disabled}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
