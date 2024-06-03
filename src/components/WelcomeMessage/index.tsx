"use client";

import { useUser } from "@clerk/nextjs";

interface IProps {}

export const WelcomeMessage: React.FC<IProps> = ({}) => {
  const { user, isLoaded } = useUser();

  return (
    <>
      <div className="space-y-2 mb-4">
        <h2 className="text-2xl lg:text-4xl font-medium">Welcome Back{isLoaded ? ", " : ' '}{user?.firstName} {'(:'}</h2>
        <p className="text-sm lg:text-base text-primary-foreground/90">
          This is your Financial Overview Report
        </p>
      </div>
    </>
  );
};
