import Header from "./Header";

const Layout = ({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) => {
  return (
    <div className=" flex flex-col relative p-10">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
