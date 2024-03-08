import Header from "./Header";

const Layout = ({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) => {
  return (
    <div className=" flex flex-col relative p-4 overflow-x-hidden">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
