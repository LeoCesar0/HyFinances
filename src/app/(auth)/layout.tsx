import Image from "next/image";
import { ReactNode } from "react";

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="relative h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
        <div className="hidden lg:block"></div>
        {/* <div className="justify-self-center translate-x-[100%]">
          <div>{children}</div>
        </div> */}
        <div className="h-full  grid place-items-center --gradient-animation">
          <Image alt="logo" width={250} height={250} src="logo.svg" />
        </div>
        <div className="fixed inset-0 h-full grid place-items-center items-start lg:items-center p-4 py-8">
          <Image
            className="lg:hidden"
            alt="logo"
            width={100}
            height={100}
            src="logo.svg"
          />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
