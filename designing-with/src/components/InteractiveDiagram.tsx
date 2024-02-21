import React, { useState } from "react"

const InteractiveDiagram = () => {
    type StagesType = {
        understand: boolean;
        define: boolean;
        ideate: boolean;
        prototype: boolean;
        develop: boolean;
        release: boolean;
      };
    const [activeStage, setActiveStage] = useState<keyof StagesType | null>(null);
    const [designPhases, setDesignPhases] = useState<StagesType>({
        understand: false,
        define: false,
        ideate: false,
        prototype: false,
        develop: false,
        release: false
      });
      const toggleStage = (stage: keyof StagesType) => {
        const isAlreadyActive = activeStage === stage;
        setActiveStage(isAlreadyActive ? null : stage);
        setDesignPhases({
            ...designPhases,
            [stage]: !isAlreadyActive,
        });
        };

      const buttonClass = (stage: keyof StagesType) => {
        if (activeStage === stage) {
          return "flex bg-white rounded h-full justify-center [writing-mode:vertical-rl] rotate-180 w-6 left-0"; // Active state
        } else if (activeStage === null) {
          return "flex bg-white rounded h-24 px-2"; // Default state when no stage is active
        }
        return "hidden"; // Hide other buttons when one is active
      };
    
    
    return(
        <div className="flex flex-row h-full w-full">
            <div className="flex flex-col h-full w-1/5">
                <p className=" text-sm w-full">Design Phase</p>
                {(["understand", "define", "ideate", "prototype", "develop", "release"] as (keyof StagesType)[]).map((stage) => (
                    <button key={stage} onClick={() => toggleStage(stage)} className={buttonClass(stage)}>
                        {stage.charAt(0).toUpperCase() + stage.slice(1)} {/* Capitalize the first letter */}
                    </button>
                ))}
            </div>
            <div className="flex flex-col w-1/5">

            </div>
            <div className="flex flex-col w-1/5">

            </div>
            <div className="flex flex-col w-1/5">

            </div>
            <div className="flex flex-col w-1/5">

            </div>
        </div>
    )

}


export default InteractiveDiagram;