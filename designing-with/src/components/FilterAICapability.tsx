import React from "react";

interface FilterAICapabilityProps {
  name: string;
  onFilter: (name: string) => void;
}

const FilterAICapability: React.FC<FilterAICapabilityProps> = (props) => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => {
    setShowResults(!showResults);
    props.onFilter(props.name);
  };
  return (
    <div>
      <button
        onClick={onClick}
        className={`flex text-sm rounded-lg px-1 ${
          showResults ? "bg-black text-white" : ""
        } `}
      >
        {" "}
        {props.name} {showResults ? "x" : ""}
      </button>
    </div>
  );
};

export default FilterAICapability;
