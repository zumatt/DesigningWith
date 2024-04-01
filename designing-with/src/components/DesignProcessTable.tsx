import React from "react";

interface DesigntableProps  {
    desStages: string,
    def:string,
}

const DesignProcessTable:React.FC<DesigntableProps> = (props) => {
    return(
        <div className="flex flex-col md:flex-row bg-[#D9D9D9] bg-opacity-50 shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] shadow-white md:shadow-none md:bg-inherit rounded-md md:gap-2">
          <p className="md:bg-[#D9D9D9] md:bg-opacity-50 md:shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] md:shadow-white rounded-lg italic md:not-italic p-4 md:w-1/6">{props.desStages}</p>
          <p className="md:bg-[#D9D9D9] md:bg-opacity-50 md:shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] md:shadow-white rounded-lg p-4 md:w-5/6">{props.def}</p>
        </div>


    );
}

export default DesignProcessTable;