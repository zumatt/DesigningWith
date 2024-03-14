import FilterAICapability from "./FilterAICapability";
import FilterDesignName from "./FilterDesignPhase";
import { FilterArg } from "./FilterUtils";

export const Results = ({
  filters,
  changeFilter,
}: {
  filters: FilterArg[];
  changeFilter: (name: string, depth: number, active: boolean) => void;
}) => (
  <div className=" overflow-auto flex-col h-64 w-full space-y-2">
    <FilterDesignName name="Design Phase" />
    <div className="  pl-2 w-full flex flex-col md:flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Understand"
          depth={1}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Define"
          depth={1}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Ideate"
          depth={1}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Prototype"
          depth={1}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Develop"
          depth={1}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Release"
          depth={1}
          onFilter={changeFilter}
        />
      </div>
    </div>
    <FilterDesignName name="AI Capability" />
    <div className="  pl-2 w-full flex flex-col md:flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Classify"
          depth={2}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Collect"
          depth={2}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Debug"
          depth={2}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Generate"
          depth={2}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Optimise"
          depth={2}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Rank"
          depth={2}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Recognise"
          depth={2}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Recommend"
          depth={2}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Summarise"
          depth={2}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Test"
          depth={2}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Translate"
          depth={2}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Visualise"
          depth={2}
          onFilter={changeFilter}
        />
      </div>
    </div>
    <FilterDesignName name="Input" />
    <div className="  pl-2 w-full flex flex-col md:flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Code"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Drawing"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Gesture"
          depth={3}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Image File"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Instruction"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Interface Component"
          depth={3}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Litterature Reference"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Prompt"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Recording"
          depth={3}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Soundtrack"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Table"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Text File"
          depth={3}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Video File"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Voice"
          depth={3}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Website"
          depth={3}
          onFilter={changeFilter}
        />
      </div>
    </div>
    <FilterDesignName name="Output" />
    <div className="  pl-2 w-full flex flex-col md:flex-row py-2 bg-white bg-opacity-50 rounded">
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="360 Image"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="3D"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Animation"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="App"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Avatar"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Code"
          depth={4}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Copy"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Floorplans"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Icon"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Illustration"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Image File"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Instruction"
          depth={4}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Interface Component"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Label"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Literature Reference"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Soundtrack"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Video File"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Table"
          depth={4}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Visualisation"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Mockup"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Text File"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Voice"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="News Article"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Website"
          depth={4}
          onFilter={changeFilter}
        />
      </div>
      <div className=" flex flex-col w-1/5 gap-2">
        <FilterAICapability
          filters={filters}
          name="Presentation"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Texture"
          depth={4}
          onFilter={changeFilter}
        />
        <FilterAICapability
          filters={filters}
          name="Render"
          depth={4}
          onFilter={changeFilter}
        />
      </div>
    </div>
  </div>
);
