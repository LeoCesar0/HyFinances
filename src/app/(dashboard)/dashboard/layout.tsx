import { Header } from "@/components/Header";

type IProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: IProps) => {
  return (
    <div>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </div>
  );
};

export default Layout;
