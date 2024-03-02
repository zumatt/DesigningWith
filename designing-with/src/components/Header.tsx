import React from "react";

const Header = ({ currentPage = "home" }: { currentPage?: string }) => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(!showResults);

  const getPageTitleDiv = (currentPage: string) => {
    switch (currentPage) {
      case "about":
        return (
          <a
            className="flex justify-center bg-purple rounded-xl px-3"
            href="/about"
          >
            <p>About</p>
          </a>
        );
      case "ai-for-designers":
        return (
          <a
            className="flex justify-center bg-blue rounded-xl px-3"
            href="/ai-for-designers"
          >
            <p>AI for Designers</p>
          </a>
        );
      case "interactive-framework":
        return (
          <a
            className="flex justify-center bg-grey rounded-xl px-3"
            href="/interactive-framework"
          >
            <p>Interactive Framework</p>
          </a>
        );
      case "didactic-guidelines":
        return (
          <a
            className="flex justify-center bg-green rounded-xl px-3"
            href="/didactic-guidelines"
          >
            <p>Didactic Guidelines</p>
          </a>
        );
      case "resources":
        return (
          <a
            className="flex justify-center bg-orange rounded-xl px-3"
            href="/resources"
          >
            <p>Resources</p>
          </a>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="h-full w-full z-0">
      {showResults ? <BlurredBack /> : null}
      <div className="flex flex-row gap-2">
        <a className="flex justify-center bg-white rounded-xl px-3" href="/">
          <p>Designing With AI</p>
        </a>
        <button
          onClick={onClick}
          className="flex justify-start bg-white rounded-xl px-3"
        >
          <p>{showResults ? "⨯" : "+"}</p>
        </button>
        {showResults ? <Results /> : getPageTitleDiv(currentPage)}
      </div>
    </div>
  );
};

export default Header;

const BlurredBack = () => (
  <div className=" h-full w-full bg-grey opacity-25 z-10">
    <></>
  </div>
);

const Results = () => (
  <div className="flex flex-col h-4 gap-2">
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
    <a className="w-fit bg-beige rounded-xl px-3" href="/">
      <p>Let’s talk!</p>
    </a>
  </div>
);
