import React from "react";

interface FilterProps {
    name: string;
    color:string;
  }

const Filter:React.FC<FilterProps> = (props ) => {
    return(
        <div>
           <button className={` border px-2 rounded-xl ${props.color}`} >
                {props.name}
            </button>
        </div>


    );
}

export default Filter;