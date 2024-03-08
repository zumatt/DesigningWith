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

  const changeFilter = (name: string, depth: number, active: boolean) => {
    setFilters((prev) => {
      const index = prev.findIndex((filter) => filter.depth === depth);
      if (index === -1) {
        return [...prev, { depth: depth, values: [name] }];
      } else if (prev[index].values.includes(name) && !active) {
        const newVals = prev[index].values.filter((value) => value !== name);

        if (newVals.length === 0) {
          return prev.filter((filter) => filter.depth !== depth);
        }

        return [
          ...prev.filter((filter) => filter.depth !== depth),
          {
            depth: depth,
            values: newVals,
          },
        ];
      } else {
        return [{ depth: depth, values: [...prev[index].values, name] }];
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
      <div className="md:flex flex-row justify-end gap-2 hidden">
        <Filter name="Premium" color="border-blue" />
        <Filter name="Freemium" color="border-purple" />
        <Filter name="Free" color="border-beige" />
        <Filter name="Free-Waiting List" color="border-orange" />
      </div>
      <button
        className={` md:flex w-full rounded my-2 bg-opacity-45 hidden   ${
          showResults ? "bg-gray-200" : ""
        } `}
        onClick={onClick}
      >
        Filter by ({showResults ? "-" : "+"})
      </button>
      {showResults ? <Results changeFilter={changeFilter} /> : null}
      <div className="flex flex-col w-max min-w-[100%]">
        <IcicleDiagram filters={filters} />
      </div>
    </Layout>
  );
};

export default InteractiveFramework;

const Results = ({
  changeFilter,
}: {
  changeFilter: (name: string, depth: number, active: boolean) => void;
}) => (
  <div className=" overflow-auto flex-col h-64 w-full space-y-2">
    <FilterDesignName name="Design Phase" />
    <div className="  pl-2 w-full flex flex-col md:flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          name="Understand"
          depth={1}
          onFilter={changeFilter}
        />
        <FilterAICapability name="Define" depth={1} onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Ideate" depth={1} onFilter={changeFilter} />
        <FilterAICapability
          name="Prototype"
          depth={1}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Develop" depth={1} onFilter={changeFilter} />
        <FilterAICapability name="Release" depth={1} onFilter={changeFilter} />
      </div>
    </div>
    <FilterDesignName name="AI Capability" />
    <div className="  pl-2 w-full flex flex-col md:flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Classify" depth={2} onFilter={changeFilter} />
        <FilterAICapability name="Collect" depth={2} onFilter={changeFilter} />
        <FilterAICapability name="Debug" depth={2} onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Generate" depth={2} onFilter={changeFilter} />
        <FilterAICapability name="Optimise" depth={2} onFilter={changeFilter} />
        <FilterAICapability name="Rank" depth={2} onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          name="Recognise"
          depth={2}
          onFilter={changeFilter}
        />
        <FilterAICapability
          name="Recommend"
          depth={2}
          onFilter={changeFilter}
        />
        <FilterAICapability
          name="Summarise"
          depth={2}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Test" depth={2} onFilter={changeFilter} />
        <FilterAICapability
          name="Translate"
          depth={2}
          onFilter={changeFilter}
        />
        <FilterAICapability
          name="Visualise"
          depth={2}
          onFilter={changeFilter}
        />
      </div>
    </div>
    <FilterDesignName name="Input" />
    <div className="  pl-2 w-full flex flex-col md:flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Code" depth={3} onFilter={changeFilter} />
        <FilterAICapability name="Drawing" depth={3} onFilter={changeFilter} />
        <FilterAICapability name="Gesture" depth={3} onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          name="Image File"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability
          name="Instruction"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability
          name="Interface Component"
          depth={3}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          name="Litterature Reference"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability name="Prompt" depth={3} onFilter={changeFilter} />
        <FilterAICapability
          name="Recording"
          depth={3}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          name="Soundtrack"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability name="Table" depth={3} onFilter={changeFilter} />
        <FilterAICapability
          name="Text File"
          depth={3}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          name="Video File"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability name="Voice" depth={3} onFilter={changeFilter} />
        <FilterAICapability name="Website" depth={3} onFilter={changeFilter} />
      </div>
    </div>
    <FilterDesignName name="Output" />
    <div className="  pl-2 w-full flex flex-col md:flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          name="360 Image"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability name="3D" depth={4} onFilter={changeFilter} />
        <FilterAICapability
          name="Animation"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability name="App" depth={4} onFilter={changeFilter} />
        <FilterAICapability name="Avatar" depth={4} onFilter={changeFilter} />
        <FilterAICapability name="Code" depth={4} onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability name="Copy" depth={4} onFilter={changeFilter} />
        <FilterAICapability
          name="Floorplans"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability name="Icon" depth={4} onFilter={changeFilter} />
        <FilterAICapability
          name="Illustration"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          name="Image File"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          name="Instruction"
          depth={4}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          name="Interface Component"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability name="Label" depth={4} onFilter={changeFilter} />
        <FilterAICapability
          name="Literature Reference"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          name="Soundtrack"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          name="Video File"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability name="Table" depth={4} onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          name="Visualisation"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability name="Mockup" depth={4} onFilter={changeFilter} />
        <FilterAICapability
          name="Text File"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability name="Voice" depth={4} onFilter={changeFilter} />
        <FilterAICapability
          name="News Article"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability name="Website" depth={4} onFilter={changeFilter} />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          name="Presentation"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability name="Texture" depth={4} onFilter={changeFilter} />
        <FilterAICapability name="Render" depth={4} onFilter={changeFilter} />
      </div>
    </div>
    {/* <FilterDesignName name="Tool" />
    <div className="  pl-2 w-full flex flex-col md:flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          name="360 Image"
          depth={5}
          onFilter={changeFilter}
        />
        <FilterAICapability name="3D" depth={5} onFilter={changeFilter} />
        <FilterAICapability
          name="Animation"
          depth={5}
          onFilter={changeFilter}
        />
        <FilterAICapability name="App" depth={5} onFilter={changeFilter} />
        <FilterAICapability name="Avatar" depth={5} onFilter={changeFilter} />
        <FilterAICapability name="Code" depth={5} onFilter={changeFilter} />
        <FilterAICapability
          name="360 Image"
          depth={5}
          onFilter={changeFilter}
        />
        <FilterAICapability name="3D" depth={5} onFilter={changeFilter} />
        <FilterAICapability
          name="Animation"
          depth={5}
          onFilter={changeFilter}
        />
        <FilterAICapability name="App" depth={5} onFilter={changeFilter} />
        <FilterAICapability name="Avatar" depth={5} onFilter={changeFilter} />
        <FilterAICapability name="Code" depth={5} onFilter={changeFilter} />
        <FilterAICapability
          name="360 Image"
          depth={5}
          onFilter={changeFilter}
        />
        <FilterAICapability name="3D" depth={5} onFilter={changeFilter} />
        <FilterAICapability
          name="Animation"
          depth={5}
          onFilter={changeFilter}
        />
        <FilterAICapability name="App" depth={5} onFilter={changeFilter} />
        <FilterAICapability name="Avatar" depth={5} onFilter={changeFilter} />
        <FilterAICapability name="Code" depth={5} onFilter={changeFilter} />
        <FilterAICapability
          name="360 Image"
          depth={5}
          onFilter={changeFilter}
        />
        <FilterAICapability name="3D" depth={5} onFilter={changeFilter} />
        <FilterAICapability
          name="Animation"
          depth={5}
          onFilter={changeFilter}
        />
        <FilterAICapability name="App" depth={5} onFilter={changeFilter} />
        <FilterAICapability name="Avatar" depth={5} onFilter={changeFilter} />
        <FilterAICapability name="Code" depth={5} onFilter={changeFilter} />
        <FilterAICapability
          name="360 Image"
          depth={5}
          onFilter={changeFilter}
        />
        <FilterAICapability name="3D" depth={5} onFilter={changeFilter} />
        </div>
      </div> */}
  </div>
);
