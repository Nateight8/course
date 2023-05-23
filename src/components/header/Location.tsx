import * as React from "react";
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

const frameworks = [
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

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {values.location
            ? frameworks.find(
                (framework) => framework.value === values.location
              )?.label
            : "You are from?"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="">
        <Command className="w-full">
          <CommandInput className="w-full" placeholder="Search country..." />
          <CommandEmpty>Country not found</CommandEmpty>
          <CommandGroup className="w-full">
            <ScrollArea className="h-72 w-full min-w-[46rem]">
              {frameworks.map((framework) => (
                <CommandItem
                  className="w-full"
                  key={framework.value}
                  value={framework.value}
                  onSelect={(value) => {
                    setFieldValue("location", value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      values.location === framework.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
