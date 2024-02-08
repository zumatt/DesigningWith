import Header from "./Header";

const Layout = ({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) => {
  return (
    <div className=" flex h-full bg-background">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
