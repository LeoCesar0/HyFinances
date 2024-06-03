import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { HeaderLogo } from "../HeaderLogo";
import { Navigation } from "../Navigation";
import { Loader2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-primary to-secondary px-4 py-8 lg:px-4 pb-36 [&>*]:text-primary-foreground ">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin size-8 text-primary-foreground" />
          </ClerkLoading>
        </div>
      </div>
    </header>
  );
};
