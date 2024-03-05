import React from "react";

interface DesigntableProps  {
    desStages: string,
    def:string,
}

const DesignProcessTable:React.FC<DesigntableProps> = (props) => {
    return(
        <div className="flex flex-col md:flex-row bg-white md:bg-inherit rounded-md md:gap-2">
          <p className=" bg-white rounded-lg italic md:not-italic p-4 md:w-1/6">{props.desStages}</p>
          <p className=" bg-white rounded-lg p-4 md:w-5/6">{props.def}</p>
        </div>


    );
}

export default DesignProcessTable;