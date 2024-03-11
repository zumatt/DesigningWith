import React from "react";
import { useLocation } from "react-router-dom";

const Header = ({
  menuIsOpen,
  setMenuIsOpen,
}: {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onClick = () => setMenuIsOpen(!menuIsOpen);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="h-full w-full">
      <div className="flex flex-row gap-2">
        <a
          className="sm:flex md:hidden justify-center bg-white rounded-xl px-3 z-10"
          href="/"
        >
          <p>DW</p>
        </a>
        <a
          className="hidden md:flex justify-center bg-white rounded-xl px-3 z-10"
          href="/"
        >
          <p>Designing With AI</p>
        </a>
        <button
          onClick={onClick}
          className="flex justify-start bg-white rounded-xl px-3 z-10"
        >
          <p>{menuIsOpen ? "⨯" : "+"}</p>
        </button>
        {menuIsOpen ? <Results /> : null}
        {!menuIsOpen && pathname === "/about" && (
          <p className="w-fit bg-purple rounded-xl px-3">About </p>
        )}
        {!menuIsOpen && pathname === "/ai-for-designers" && (
          <p className="w-fit bg-blue rounded-xl px-3">AI for Designers </p>
        )}
        {!menuIsOpen && pathname === "/interactive-framework" && (
          <p className="w-fit bg-grey rounded-xl px-3">
            Interactive Framework{" "}
          </p>
        )}
        {!menuIsOpen && pathname === "/didactic-guidelines" && (
          <p className="w-fit bg-green rounded-xl px-3">Didactic Guidelines </p>
        )}
        {!menuIsOpen && pathname === "/resources" && (
          <p className="w-fit bg-orange rounded-xl px-3">Resources </p>
        )}
        {!menuIsOpen && pathname === "/" && (
          <p className="w-fit bg-beige rounded-xl px-3">Let’s talk! </p>
        )}
      </div>
      {menuIsOpen ? <BlurredBack /> : null}
    </div>
  );
};

export default Header;

const BlurredBack = () => (
  <div className="fixed h-screen w-screen bg-[#E9E9E9] opacity-85 z-2 top-0 left-0">
    <></>
  </div>
);

const Results = () => (
  <div className="flex flex-col h-4 gap-2 z-10">
    <a className="w-fit bg-purple rounded-xl px-3" href="/about">
      <p>About</p>
    </a>
    <a className="w-fit bg-blue rounded-xl px-3" href="/ai-for-designers">
      <p>AI for Designers</p>
    </a>
    <a className="w-fit bg-grey rounded-xl px-3" href="/interactive-framework">
      <p>Interactive Framework</p>
    </a>
    <a className="w-fit bg-green rounded-xl px-3" href="/didactic-guidelines">
      <p>Didactic Guidelines</p>
    </a>
    <a className="w-fit bg-orange rounded-xl px-3" href="/resources">
      <p>Resources</p>
    </a>
    <a
      className="w-fit bg-beige rounded-xl px-3"
      href="mailto:designingwithai@supsi.ch?subject=Let’s talk! - Designing With AI Website"
    >
      <p>Let’s talk!</p>
    </a>
  </div>
);
