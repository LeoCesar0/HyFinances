"use client";

import { DASHBOARD_ROUTES } from "@/static/routes";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface IProps {}

export const Navigation: React.FC<IProps> = ({}) => {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {DASHBOARD_ROUTES.map((route) => {
        const isActive = pathname === route.href;
        return (
          <Button
            className={cn(
              "w-full lg:w-auto justify-between font-normal border-none  text-primary-foreground transition bg-transparent",
              "focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none focus:bg-white/30",
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
