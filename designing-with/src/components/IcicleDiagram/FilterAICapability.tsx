import React from "react";

interface FilterAICapabilityProps {
  name: string;
  depth: number;
  onFilter: (name: string, depth: number, active: boolean) => void;
}

const FilterAICapability: React.FC<FilterAICapabilityProps> = (props) => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => {
    props.onFilter(props.name, props.depth, !showResults);
    setShowResults(!showResults);
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
