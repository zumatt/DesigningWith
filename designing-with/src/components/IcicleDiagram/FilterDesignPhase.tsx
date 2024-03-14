import React from "react";


interface FilterDesignNameProps {
    name: string;
  }

const FilterDesignName:React.FC<FilterDesignNameProps> = (props ) => {
    return(
        <div>
            <p className="w-full pl-2 flex text-sm bg-white rounded">{props.name}</p>

        </div>


    );
}

export default FilterDesignName;