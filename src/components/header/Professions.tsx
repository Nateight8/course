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
import professionsData from "../../../data/data";
import { ScrollArea } from "../ui/scroll-area";

function Professions() {
  const { values, setFieldValue } = useFormikContext<FormikValues>();
  const [open, setOpen] = React.useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");

  const returnName = professionsData.find(
    (pro) => pro.value === selectedLabel
  )?.name;

  useEffect(() => {
    if (returnName) {
      setFieldValue("profession", returnName);
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
          {values.profession ? returnName : "You are a/an?"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="">
        <Command className="w-full">
          <CommandInput className="w-full" placeholder="Search Profession..." />
          <CommandEmpty>Country not found</CommandEmpty>
          <CommandGroup className="w-full">
            <ScrollArea className="h-72 w-full min-w-[46rem]">
              {professionsData.map((pro) => (
                <CommandItem
                  className="w-full"
                  key={pro.value}
                  value={pro.value}
                  onSelect={(value) => {
                    setSelectedLabel(value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      values.profession === pro.name
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {pro.name}
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default Professions;
