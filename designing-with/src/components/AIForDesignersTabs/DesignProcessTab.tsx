import { TabElement } from "../TabsDisplay";
import DesignProcessTable from "../DesignProcessTable";
import DesignPhaseSvg from "../AIForDesignersContent/DesignPhaseSvg";

const DesignProcessTab: TabElement = {
  title: "(a) Design process",
  mobileTitle: "(a)",
  elements: (
    <div className="flex flex-col gap-2">
      <div className="bg-[#D9D9D9] bg-opacity-50 shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] shadow-white px-4 py-6 rounded-b-2xl">
        <h2>
          The definition of a design model consisting of 6 design stages.
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-[14px] mt-[33px] mb-[25px]">
          <p className="flex-1">
          To integrate the new knowledge into the educational environment
          and support teachers and students in integrating AI during
          the design practice, we defined a new design model based
          on six stages: Understand, Define, Ideate, Prototype, Develop, and Release.
          </p>
          <p className="flex-1">
          The definition of these stages takes into account the reference
          models produced by academic institutions, professional organisations
          and design practices, such as the Double Diamond
          model (IDEO, 2009, 2012, 2015) and the Design Thinking model proposed
          by Ideo (Design Council, n.d., 2021).
          </p>
        </div>
      </div>
      <div className="bg-[#D9D9D9] bg-opacity-50 shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] shadow-white px-4 py-6 rounded-b-2xl">
          <DesignPhaseSvg />
      </div>
    </div>),
      extra: (
      <div className=" flex flex-col gap-2">
        <p className=" bg-white rounded-lg p-4 md:hidden">
          Design stages
        </p>
        <div className="hidden w-full md:flex md:flex-col ">
          <DesignProcessTable
            desStages="Design stages"
            def="Definition"
          />
        </div>
        <DesignProcessTable
          desStages="Understand"
          def="Investigate the context, target groups, and stakeholders through research to explore, discover and analyse needs, barriers, attitudes, and aspirations"
        />
        <DesignProcessTable
          desStages="Define"
          def="Gather insights from the research to frame key findings to outline specific design opportunities and challenges"
        />
        <DesignProcessTable
          desStages="Ideate"
          def="Generate ideas for new design solutions in response to opportunities and challenges"
        />
        <DesignProcessTable
          desStages="Prototype"
          def="Transforming ideas into a concrete solution, making samples for use, observation, and evaluation in their context"
        />
        <DesignProcessTable
          desStages="Develop"
          def="Shaping in detail the final solution after appropriate refinements and testing"
        />
        <DesignProcessTable
          desStages="Release"
          def="Communicate, distribute, publish, and make open solutions and outputs available to the target groups, stakeholders, as well as the whole society"
        />
      </div>)
}

export default DesignProcessTab;