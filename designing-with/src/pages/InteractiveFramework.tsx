import React from "react";
import Layout from "../components/Layout";
import Filter from "../components/Filter";
import FilterDesignName from "../components/FilterDesignPhase";
import FilterAICapability from "../components/FilterAICapability";
import IcicleDiagram from "../components/IcicleDiagram";

const InteractiveFramework = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(!showResults);
  return (
    <Layout>
      <a className="mt-[33px] underline cursor-pointer text-xl">
        Recommend a tool
      </a>
      <div className="flex flex-row justify-end gap-2">
        <Filter name="Premium" color="border-blue" />
        <Filter name="Freemium" color="border-purple" />
        <Filter name="Free" color="border-beige" />
        <Filter name="Free-Waiting List" color="border-orange" />
      </div>
      <button className={` flex w-full rounded my-2 bg-opacity-45  ${showResults ? 'bg-gray-200' : ''} `} onClick={onClick}>Filter by ({showResults ? '-' : '+' })</button>
      {showResults ? <Results /> : null}
      <div className="flex flex-row">
        <IcicleDiagram />
      </div>
    </Layout>
  );
};

export default InteractiveFramework;

const Results = () => (
  <div className=" overflow-auto flex-col h-64 w-full space-y-2">
    <FilterDesignName name="Design Phase"/>
    <div className="  pl-2 w-full flex flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Understand'/>
        <FilterAICapability name='Define'/>
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Ideate'/>
        <FilterAICapability name='Prototype'/>
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Develop'/>
        <FilterAICapability name='Release'/>
      </div>
    </div>
    <FilterDesignName name="AI Capability"/>
    <div className="  pl-2 w-full flex flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Classify'/>
        <FilterAICapability name='Collect'/>
        <FilterAICapability name='Debug'/>
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Generate'/>
        <FilterAICapability name='Optimise'/>
        <FilterAICapability name='Rank'/>
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Recognise'/>
        <FilterAICapability name='Recommend'/>
        <FilterAICapability name='Summarise'/>
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Test'/>
        <FilterAICapability name='Translate'/>
        <FilterAICapability name='Visualise'/>
      </div>
    </div>
    <FilterDesignName name="Input"/>
    <div className="  pl-2 w-full flex flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Code'/>
        <FilterAICapability name='Drawing'/>
        <FilterAICapability name='Gesture'/>
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Image File'/>
        <FilterAICapability name='Instruction'/>
        <FilterAICapability name='Interface Component'/>
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Litterature Reference'/>
        <FilterAICapability name='Prompt'/>
        <FilterAICapability name='Recording'/>
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Soundtrack'/>
        <FilterAICapability name='Table'/>
        <FilterAICapability name='Text File'/>
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Video File'/>
        <FilterAICapability name='Voice'/>
        <FilterAICapability name='Website'/>
      </div>
    </div>
    <FilterDesignName name="Output"/>
    <div className="  pl-2 w-full flex flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='360 Image'/>
        <FilterAICapability name='3D'/>
        <FilterAICapability name='Animation'/>
        <FilterAICapability name='App'/>
        <FilterAICapability name='Avatar'/>
        <FilterAICapability name='Code'/>
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Copy'/>
        <FilterAICapability name='Floorplans'/>
        <FilterAICapability name='Icon'/>
        <FilterAICapability name='Illustration'/>
        <FilterAICapability name='Image File'/>
        <FilterAICapability name='Instruction'/>
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Interface Component'/>
        <FilterAICapability name='Label'/>
        <FilterAICapability name='Literature Reference'/>
        <FilterAICapability name='Soundtrack'/>
        <FilterAICapability name='Video File'/>
        <FilterAICapability name='Table'/>
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Visualisation'/>
        <FilterAICapability name='Mockup'/>
        <FilterAICapability name='Text File'/>
        <FilterAICapability name='Voice'/>
        <FilterAICapability name='News Article'/>
        <FilterAICapability name='Website'/>
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='Presentation'/>
        <FilterAICapability name='Texture'/>
        <FilterAICapability name='Render'/>
      </div>
    </div>
    <FilterDesignName name="Tool"/>
    <div className="  pl-2 w-full flex flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name='360 Image'/>
        <FilterAICapability name='3D'/>
        <FilterAICapability name='Animation'/>
        <FilterAICapability name='App'/>
        <FilterAICapability name='Avatar'/>
        <FilterAICapability name='Code'/>
        <FilterAICapability name='360 Image'/>
        <FilterAICapability name='3D'/>
        <FilterAICapability name='Animation'/>
        <FilterAICapability name='App'/>
        <FilterAICapability name='Avatar'/>
        <FilterAICapability name='Code'/>
        <FilterAICapability name='360 Image'/>
        <FilterAICapability name='3D'/>
        <FilterAICapability name='Animation'/>
        <FilterAICapability name='App'/>
        <FilterAICapability name='Avatar'/>
        <FilterAICapability name='Code'/>
        <FilterAICapability name='360 Image'/>
        <FilterAICapability name='3D'/>
        <FilterAICapability name='Animation'/>
        <FilterAICapability name='App'/>
        <FilterAICapability name='Avatar'/>
        <FilterAICapability name='Code'/>
        <FilterAICapability name='360 Image'/>
        <FilterAICapability name='3D'/>
      </div>
    </div>
  </div>
);