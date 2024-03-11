import { useState } from "react";
import Header from "./Header";

const Layout = ({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className={`flex flex-col relative p-4 overflow-x-hidden${
        isMenuOpen ? " overflow-hidden max-h-screen" : ""
      }`}
    >
      <Header menuIsOpen={isMenuOpen} setMenuIsOpen={setIsMenuOpen} />
      {children}
    </div>
  );
};

export default Layout;
