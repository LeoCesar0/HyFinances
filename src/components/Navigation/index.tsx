"use client";

import { DASHBOARD_ROUTES } from "@/static/routes";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useMedia } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

interface IProps {}

export const Navigation: React.FC<IProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const goTo = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant={"outline"} size={"sm"} className="transition-all ">
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <nav className="flex flex-col gap-y-2 pt-6">
            {DASHBOARD_ROUTES.map((route) => {
              const isActive = pathname === route.href;
              return (
                <Button
                  size="sm"
                  variant={isActive ? "secondary" : "ghost"}
                  key={route.href}
                  onClick={() => goTo(route.href)}
                >
                  {route.label}
                </Button>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {DASHBOARD_ROUTES.map((route) => {
        const isActive = pathname === route.href;
        return (
          <Button
            className={cn(
              "w-full lg:w-auto justify-between font-normal border-none  text-primary-foreground transition-all bg-transparent",
              "focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none focus:bg-white/50",
              "hover:bg-primary-foreground/30 hover:text-primary-foreground",
              {
                "bg-primary-foreground/25 text-primary-foreground": isActive,
              }
            )}
            asChild
            size="sm"
            variant={"outline"}
            key={route.href}
          >
            <Link href={route.href}>{route.label}</Link>
          </Button>
        );
      })}
    </nav>
  );
};
