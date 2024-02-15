import React from "react";

const Header = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(!showResults);
  return (
    <>
      <div className="w-full z-20">
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
          {showResults ? <Results /> : null}
        </div>
      </div>
      {showResults && (
        <div className="bg-white w-screen h-screen fixed top-0 left-0 opacity-50 z-10" />
      )}
    </>
  );
};

export default Header;

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
