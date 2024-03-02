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
      type AICapabilitiesType = {
        classify: boolean;
        collect: boolean;
        debug: boolean;
        generate: boolean;
        optimise: boolean;
        rank: boolean;
        recognise: boolean;
        recommend: boolean;
        summarise: boolean;
        test: boolean;
        translate: boolean;
        visualise: boolean;
      };
      type InputTypes = {
        code: boolean;
        drawing: boolean;
        gesture: boolean;
        imageFile: boolean;
        instruction: boolean;
        interfaceComponent: boolean;
        literatureReference: boolean;
        prompt: boolean;
        recording: boolean;
        soundtrack: boolean;
        table: boolean;
        textFile: boolean;
        videoFile: boolean;
        voice: boolean;
        website: boolean;
      };
      const [inputTypes, setInputTypes] = useState<InputTypes>({
        code: false,
        drawing: false,
        gesture: false,
        imageFile: false,
        instruction: false,
        interfaceComponent: false,
        literatureReference: false,
        prompt: false,
        recording: false,
        soundtrack: false,
        table: false,
        textFile: false,
        videoFile: false,
        voice: false,
        website: false,
      });
    
      const [activeInputType, setActiveInputType] = useState<string | null>(null);

      const [activeCapability, setActiveCapability] = useState<keyof AICapabilitiesType | null>(null);
  
    const [aiCapabilities, setAICapabilities] = useState<AICapabilitiesType>({
        classify: false,
        collect: false,
        debug: false,
        generate: false,
        optimise: false,
        rank: false,
        recognise: false,
        recommend: false,
        summarise: false,
        test: false,
        translate: false,
        visualise: false,
    });
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
        const toggleCapability = (capability: keyof AICapabilitiesType) => {
            const isAlreadyActive = activeCapability === capability;
            setActiveCapability(isAlreadyActive ? null : capability);
            setAICapabilities({
              ...aiCapabilities,
              [capability]: !isAlreadyActive,
            });
          };

          const toggleInputType = (inputType: keyof InputTypes) => {
            const isAlreadyActive = activeInputType === inputType;
            setActiveInputType(isAlreadyActive ? null : inputType);
            setInputTypes(prev => ({
              ...prev,
              [inputType]: !isAlreadyActive,
            }));
          };

          const inputTypeNames: (keyof InputTypes)[] = [
            "code", "drawing", "gesture", "imageFile", "instruction", 
            "interfaceComponent", "literatureReference", "prompt", "recording", 
            "soundtrack", "table", "textFile", "videoFile", "voice", "website"
          ];

      const buttonClass = (stage: keyof StagesType) => {
        if (activeStage === stage) {
          return "flex bg-white rounded h-full justify-center [writing-mode:vertical-rl] rotate-180 w-6 left-0"; // Active state
        } else if (activeStage === null) {
          return "flex bg-white rounded h-24 px-2"; // Default state when no stage is active
        }
        return "hidden"; // Hide other buttons when one is active
      };

      const buttonClass2 = (stage: keyof AICapabilitiesType) => {
        if (activeCapability === stage) {
          return "flex bg-white rounded h-full justify-center [writing-mode:vertical-rl] rotate-180 w-6 left-0"; // Active state
        } else if (activeCapability === null) {
          return "flex bg-white rounded h-6 px-2"; // Default state when no stage is active
        }
        return "hidden"; // Hide other buttons when one is active
      };
      const buttonClass3 = (stage: keyof InputTypes) => {
        if (activeInputType === stage) {
          return "flex bg-white rounded h-full justify-center [writing-mode:vertical-rl] rotate-180 w-6 left-0"; // Active state
        } else if (activeInputType === null) {
          return "flex bg-white rounded h-6 px-2"; // Default state when no stage is active
        }
        return "hidden"; // Hide other buttons when one is active
      };
    
    
    return(
        <div className="flex flex-row gap-2 h-full w-full">
            <div className={`flex flex-col h-fixed gap-2 ${ designPhases.understand || designPhases.define || designPhases.ideate || designPhases.prototype || designPhases.develop || designPhases.release  ? 'w-6' : 'w-1/5'} `} >
                <p className={` text-sm ${designPhases.understand || designPhases.define || designPhases.ideate || designPhases.prototype || designPhases.develop || designPhases.release  ? 'hidden' : 'w-full'} `}>Design Phase</p>
                {(["understand", "define", "ideate", "prototype", "develop", "release"] as (keyof StagesType)[]).map((stage) => (
                    <button key={stage} onClick={() => toggleStage(stage)} className={buttonClass(stage)}>
                        {stage.charAt(0).toUpperCase() + stage.slice(1)} {/* Capitalize the first letter */}
                    </button>
                ))}
            </div>
            <div className={`flex flex-col h-fixed gap-2 ${aiCapabilities.classify || aiCapabilities.collect || aiCapabilities.debug || aiCapabilities.generate || aiCapabilities.optimise || aiCapabilities.rank || aiCapabilities.recognise || aiCapabilities.recommend || aiCapabilities.summarise || aiCapabilities.test  || aiCapabilities.translate || aiCapabilities.visualise  ? 'w-6' : 'w-1/5'}`}>
                <p className={`text-sm ${aiCapabilities.classify || aiCapabilities.collect || aiCapabilities.debug || aiCapabilities.generate ||  aiCapabilities.optimise || aiCapabilities.rank || aiCapabilities.recognise || aiCapabilities.recommend || aiCapabilities.summarise || aiCapabilities.test || aiCapabilities.translate  || aiCapabilities.visualise ? 'hidden' : 'w-full'}`}>AI Capabilities</p>
                {(["classify", "collect", "debug", "generate", "optimise", "rank", "recognise", "recommend", "summarise", "test", "translate", "visualise"] as (keyof AICapabilitiesType)[]).map((stage) => (
                    <button key={stage} onClick={() => toggleCapability(stage)} className={buttonClass2(stage)}>
                        {stage.charAt(0).toUpperCase() + stage.slice(1)} {/* Capitalize the first letter */}
                    </button>
                ))}
            </div>
            <div className={`flex flex-col h-fixed gap-2 ${inputTypes.code || inputTypes.drawing || inputTypes.gesture || inputTypes.imageFile || inputTypes.instruction || inputTypes.interfaceComponent || inputTypes.literatureReference || inputTypes.prompt || inputTypes.recording || inputTypes.soundtrack || inputTypes.table || inputTypes.textFile || inputTypes.videoFile || inputTypes.voice || inputTypes.website ? 'w-6' : 'w-1/5'}`}>
                <p className={`text-sm ${inputTypes.code || inputTypes.drawing || inputTypes.gesture || inputTypes.imageFile || inputTypes.instruction || inputTypes.interfaceComponent || inputTypes.literatureReference || inputTypes.prompt || inputTypes.recording || inputTypes.soundtrack || inputTypes.table || inputTypes.textFile || inputTypes.videoFile || inputTypes.voice || inputTypes.website ? 'hidden' : 'w-full'}`}>AI Input Form</p>
                {(["code", "drawing", "gesture", "image file", "instruction", "interface component", "literature reference", "prompt", "recording", "soundtrack", "table", "text file", "video file", "voice", "website"] as (keyof InputTypes)[]).map((stage) => (
                    <button key={stage} onClick={() => toggleInputType(stage)} className={buttonClass3(stage)}>
                        {stage.charAt(0).toUpperCase() + stage.slice(1)} {/* Capitalize the first letter */}
                    </button>
                ))}
            </div>
            
            <div className="flex flex-col w-1/5">

            </div>
        </div>
    )

}


export default InteractiveDiagram;