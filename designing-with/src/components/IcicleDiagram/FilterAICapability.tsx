import React, { useEffect } from "react";
import { FilterArg } from "./FilterUtils";
import { filter } from "d3";

interface FilterAICapabilityProps {
  filters: FilterArg[];
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
  useEffect(() => {
    setShowResults(
      filter(
        props.filters,
        (f) => f.values.includes(props.name) && f.depth === props.depth
      ).length > 0
    );
  }, [props.filters]);
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
