import { APP_TITLE } from "@/static/config";
import Image from "next/image";
import Link from "next/link";

interface IProps {}

export const HeaderLogo: React.FC<IProps> = ({}) => {
  return (
    <>
      <Link href="/">
        <div className="items-center hidden lg:flex gap-2">
          <Image alt="logo" src="logo.svg" width={28} height={28} />
          <p className="font-semibold text-gray italic text-2xl ">
            {APP_TITLE}
          </p>
        </div>
      </Link>
    </>
  );
};
