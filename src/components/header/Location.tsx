import React, { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { cn } from "~/lib/utils";
import { FormikValues, useFormikContext } from "formik";
import { ScrollArea } from "../ui/scroll-area";
// import codes from "iso-3166-1"

const countries = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function LocationCX() {
  const [open, setOpen] = React.useState(false);
  const { values, setFieldValue } = useFormikContext<FormikValues>();

  const [selectedLabel, setSelectedLabel] = useState("");

  // const returnName = countries.find(
  //   (country) => country.value === selectedLabel
  // )?.name;

  const returnName = countries.find(
    (country) => country.value === selectedLabel
  )?.label;

  useEffect(() => {
    if (returnName) {
      setFieldValue("location", returnName);
    }
  }, [returnName, setFieldValue]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {values.location ? returnName : "You are a/an?"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="">
        <Command className="w-full">
          <CommandInput className="w-full" placeholder="Search country..." />
          <CommandEmpty>Country not found</CommandEmpty>
          <CommandGroup className="w-full">
            <ScrollArea className="h-72 w-full min-w-[46rem]">
              {countries.map((country) => (
                <CommandItem
                  className="w-full"
                  key={country.value}
                  value={country.value}
                  onSelect={(value) => {
                    setSelectedLabel(value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      values.location === country.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {country.label}
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
