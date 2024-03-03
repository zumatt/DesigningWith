import Header from "./Header";

const Layout = ({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) => {
  return (
    <div className=" flex flex-col relative p-5 md:p-10 overflow-x-hidden">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
