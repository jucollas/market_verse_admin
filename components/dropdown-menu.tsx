"use client"

import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { 
  Command, 
  CommandList,  
  CommandGroup, 
  CommandItem,
} from "@/components/ui/command";

type PopoverTriggerProps = React.ComponentPropsWithRef<typeof PopoverTrigger>

interface Route {
  href: string;
  label: string;
  active: boolean;
}

interface DropDownMenuProps extends PopoverTriggerProps {
  routes: Route[];
}

export default function DropDownMenu({
  className,
  routes = []
}: DropDownMenuProps) {

  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Menu"
          className={cn("w-[100px] justify-center", className)}
        >
          <Menu className="mr-2 h-4 w-4"/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[100px] p-0">
        <Command>
          <CommandList>
            <CommandGroup heading="Menu" >
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    route.active ? "text-black dark:text-white" : "text-muted-foreground"
                  )}
                >
                  <CommandItem
                    onSelect={() => setOpen(false)}
                  >
                    {route.label}
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};