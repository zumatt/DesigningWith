import React from "react";

interface FilterProps {
  name: string;
  color: string;
}

const Filter: React.FC<FilterProps> = (props) => {
  return (
    <div>
      <span
        className={`border px-2 py-1 rounded-xl cursor-default ${props.color}`}
      >
        {props.name}
      </span>
    </div>
  );
};

export default Filter;
