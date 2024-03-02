import React from "react";
import Layout from "../components/Layout";
import Filter from "../components/Filter";
import FilterDesignName from "../components/FilterDesignPhase";
import FilterAICapability from "../components/FilterAICapability";
import { useState } from "react";
import IcicleDiagram, { FilterArg } from "../components/IcicleDiagram";

const InteractiveFramework = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(!showResults);
  const [filters, setFilters] = useState<FilterArg[]>([]);

  const changeFilter = (name: string) => {
    setFilters((prev) => {
      const index = prev.findIndex((filter) => filter.property === "name");
      if (index === -1) {
        return [...prev, { property: "name", values: [name] }];
      } else if (prev[index].values.includes(name)) {
        const newVals = prev[index].values.filter((value) => value !== name);
        if (newVals.length === 0) return [];
        return [
          {
            property: "name",
            values: newVals,
          },
        ];
      } else {
        return [{ property: "name", values: [...prev[index].values, name] }];
      }
    });
  };

  return (
    <Layout>
      <a
        className="mt-[33px] underline cursor-pointer text-xl"
        href="www.google.com"
      >
        Recommend a tool
      </a>
      <div className="flex flex-row justify-end gap-2">
        <Filter name="Premium" color="border-blue" />
        <Filter name="Freemium" color="border-purple" />
        <Filter name="Free" color="border-beige" />
        <Filter name="Free-Waiting List" color="border-orange" />
      </div>
      <button
        className={` flex w-full rounded my-2 bg-opacity-45  ${
          showResults ? "bg-gray-200" : ""
        } `}
        onClick={onClick}
      >
        Filter by ({showResults ? "-" : "+"})
      </button>
      {showResults ? <Results changeFilter={changeFilter} /> : null}
      <div className="flex flex-col w-max min-w-[100%]">
        {/* <InteractiveDiagram/> */}
        <IcicleDiagram filters={filters} />
      </div>
    </Layout>
  );
};

export default InteractiveFramework;

const Results = ({
  changeFilter,
}: {
  changeFilter: (name: string) => void;
}) => (
  <div className=" overflow-auto flex-col h-64 w-full space-y-2">
    <FilterDesignName name="Design Phase" />
    <div className="  pl-2 w-full flex flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Understand" onFilter={changeFilter} />
        <FilterAICapability name="Define" onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Ideate" onFilter={changeFilter} />
        <FilterAICapability name="Prototype" onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Develop" onFilter={changeFilter} />
        <FilterAICapability name="Release" onFilter={changeFilter} />
      </div>
    </div>
    <FilterDesignName name="AI Capability" />
    <div className="  pl-2 w-full flex flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Classify" onFilter={changeFilter} />
        <FilterAICapability name="Collect" onFilter={changeFilter} />
        <FilterAICapability name="Debug" onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Generate" onFilter={changeFilter} />
        <FilterAICapability name="Optimise" onFilter={changeFilter} />
        <FilterAICapability name="Rank" onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Recognise" onFilter={changeFilter} />
        <FilterAICapability name="Recommend" onFilter={changeFilter} />
        <FilterAICapability name="Summarise" onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Test" onFilter={changeFilter} />
        <FilterAICapability name="Translate" onFilter={changeFilter} />
        <FilterAICapability name="Visualise" onFilter={changeFilter} />
      </div>
    </div>
    <FilterDesignName name="Input" />
    <div className="  pl-2 w-full flex flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Code" onFilter={changeFilter} />
        <FilterAICapability name="Drawing" onFilter={changeFilter} />
        <FilterAICapability name="Gesture" onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Image File" onFilter={changeFilter} />
        <FilterAICapability name="Instruction" onFilter={changeFilter} />
        <FilterAICapability
          name="Interface Component"
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          name="Litterature Reference"
          onFilter={changeFilter}
        />
        <FilterAICapability name="Prompt" onFilter={changeFilter} />
        <FilterAICapability name="Recording" onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Soundtrack" onFilter={changeFilter} />
        <FilterAICapability name="Table" onFilter={changeFilter} />
        <FilterAICapability name="Text File" onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Video File" onFilter={changeFilter} />
        <FilterAICapability name="Voice" onFilter={changeFilter} />
        <FilterAICapability name="Website" onFilter={changeFilter} />
      </div>
    </div>
    <FilterDesignName name="Output" />
    <div className="  pl-2 w-full flex flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="360 Image" onFilter={changeFilter} />
        <FilterAICapability name="3D" onFilter={changeFilter} />
        <FilterAICapability name="Animation" onFilter={changeFilter} />
        <FilterAICapability name="App" onFilter={changeFilter} />
        <FilterAICapability name="Avatar" onFilter={changeFilter} />
        <FilterAICapability name="Code" onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Copy" onFilter={changeFilter} />
        <FilterAICapability name="Floorplans" onFilter={changeFilter} />
        <FilterAICapability name="Icon" onFilter={changeFilter} />
        <FilterAICapability name="Illustration" onFilter={changeFilter} />
        <FilterAICapability name="Image File" onFilter={changeFilter} />
        <FilterAICapability name="Instruction" onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          name="Interface Component"
          onFilter={changeFilter}
        />
        <FilterAICapability name="Label" onFilter={changeFilter} />
        <FilterAICapability
          name="Literature Reference"
          onFilter={changeFilter}
        />
        <FilterAICapability name="Soundtrack" onFilter={changeFilter} />
        <FilterAICapability name="Video File" onFilter={changeFilter} />
        <FilterAICapability name="Table" onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Visualisation" onFilter={changeFilter} />
        <FilterAICapability name="Mockup" onFilter={changeFilter} />
        <FilterAICapability name="Text File" onFilter={changeFilter} />
        <FilterAICapability name="Voice" onFilter={changeFilter} />
        <FilterAICapability name="News Article" onFilter={changeFilter} />
        <FilterAICapability name="Website" onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Presentation" onFilter={changeFilter} />
        <FilterAICapability name="Texture" onFilter={changeFilter} />
        <FilterAICapability name="Render" onFilter={changeFilter} />
      </div>
    </div>
    <FilterDesignName name="Tool" />
    <div className="  pl-2 w-full flex flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="360 Image" onFilter={changeFilter} />
        <FilterAICapability name="3D" onFilter={changeFilter} />
        <FilterAICapability name="Animation" onFilter={changeFilter} />
        <FilterAICapability name="App" onFilter={changeFilter} />
        <FilterAICapability name="Avatar" onFilter={changeFilter} />
        <FilterAICapability name="Code" onFilter={changeFilter} />
        <FilterAICapability name="360 Image" onFilter={changeFilter} />
        <FilterAICapability name="3D" onFilter={changeFilter} />
        <FilterAICapability name="Animation" onFilter={changeFilter} />
        <FilterAICapability name="App" onFilter={changeFilter} />
        <FilterAICapability name="Avatar" onFilter={changeFilter} />
        <FilterAICapability name="Code" onFilter={changeFilter} />
        <FilterAICapability name="360 Image" onFilter={changeFilter} />
        <FilterAICapability name="3D" onFilter={changeFilter} />
        <FilterAICapability name="Animation" onFilter={changeFilter} />
        <FilterAICapability name="App" onFilter={changeFilter} />
        <FilterAICapability name="Avatar" onFilter={changeFilter} />
        <FilterAICapability name="Code" onFilter={changeFilter} />
        <FilterAICapability name="360 Image" onFilter={changeFilter} />
        <FilterAICapability name="3D" onFilter={changeFilter} />
        <FilterAICapability name="Animation" onFilter={changeFilter} />
        <FilterAICapability name="App" onFilter={changeFilter} />
        <FilterAICapability name="Avatar" onFilter={changeFilter} />
        <FilterAICapability name="Code" onFilter={changeFilter} />
        <FilterAICapability name="360 Image" onFilter={changeFilter} />
        <FilterAICapability name="3D" onFilter={changeFilter} />
      </div>
    </div>
  </div>
);
