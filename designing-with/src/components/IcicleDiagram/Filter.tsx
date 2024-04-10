import React from "react";

interface FilterProps {
  name: string;
  color: string;
  onClick?: () => void;
}

const Filter: React.FC<FilterProps> = (props) => {
  return (
    <div onClick={props.onClick}>
      <p
        className={`border px-2 py-1 rounded-xl cursor-default ${props.color}`}
        style={{ fontSize: 13 }}
      >
        {props.name}
      </p>
    </div>
  );
};

export default Filter;
