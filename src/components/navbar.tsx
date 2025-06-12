import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { ModeToggle } from "@/components/mode-toggle";

interface Link {
  href: string;
  label: string;
}

interface NavbarProps {
  links: Link[];
}

function DesktopNavbar({ links }: NavbarProps) {
  return (
    <nav className="border-bottom hidden md:block">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-4">
          {links.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink
                asChild
                className={cn("px-4 py-2 hover:underline")}
              >
                <a href={href}>{label}</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

function MobileNavbar({ links }: NavbarProps) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px] p-6">
          <div className="flex h-full flex-col">
            <nav className="mt-4 flex flex-grow flex-col gap-4">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="block rounded-md px-4 py-2 text-lg"
                >
                  {label}
                </a>
              ))}
            </nav>
            <ModeToggle className="w-full" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default function Navbar() {
  const links: Link[] = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="navbar w-full px-6 py-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <a href="/">cpatino.com</a>
        </div>
        <DesktopNavbar links={links} />
        <MobileNavbar links={links} />
      </div>
    </header>
  );
}
