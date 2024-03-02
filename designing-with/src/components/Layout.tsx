import Header from "./Header";

const Layout = ({
  children,
  currentPage,
}: {
  children: React.ReactNode[] | React.ReactNode;
  currentPage?: string;
}) => {
  return (
    <div className=" flex flex-col relative p-10 overflow-x-hidden">
      <Header currentPage={currentPage} />
      {children}
    </div>
  );
};

export default Layout;
