import { TabElement } from "../TabsDisplay";
import AiForDesignersSvg from "../AiForDesignersSvg";
import AdditionalInformations from "../AdditionalInformations";

const DataTypesTab: TabElement = {
  
  title: "(c) Data types",
  mobileTitle: "(c)",
  elements: (
    <div className="flex flex-col gap-2">
      <div className="bg-[#D9D9D9] bg-opacity-50 shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] shadow-white px-4 py-6 rounded-b-2xl">
       
        <h2>
          A classification of 7 data types handled by AI tools as input and output
        </h2>
        <div className="flex flex-col md:flex-row justify-between md:gap-[14px] mt-[33px] mb-[25px]">
          <p className="flex-1">
            Input and output data play pivotal roles when working with AI.
            Identifying the data type is fundamental to choosing the most
            suitable tool and producing the expected outcome.
          </p>
          <p className="flex-1">
            For the reason of supporting designers working with data,
            we first make clear what is meant by <span className="italic">input</span> and <span className="italic">output data</span>. 
          </p>
        </div>
      </div>
    </div>
  ),
  extra: (
    <>
    <h2 className="p-4 rounded-2xl mb-2" style={{boxShadow: "0px 0px 100px 5px #FFFFFF inset", backgroundColor: "#72DAFB"}}>
        Input data refers to the information that is given
        by a designer to an AI system, model, or algorithm
        to be processed or analysed. 
      </h2>
      <h2 className="p-4 rounded-2xl mb-2" style={{boxShadow: "0px 0px 100px 5px #FFFFFF inset", backgroundColor: "#5B99F4"}}>
        Output data pertains to the outcome produced by a
        system as a result of processing the input data.{" "}
      </h2>
      <div className="flex flex-col md:flex-row justify-between md:gap-[14px] glassBox p-4 rounded-2xl">
        <p className="flex-1 mt-[33px] mb-[25px]">
        Based on these definitions, we then introduce seven
        categories of data: <span className="italic">numerical</span>, <span className="italic">textual</span>, <span className="italic">image</span>, <span className="italic">audio</span>,
        <span className="italic">category</span>, <span className="italic">video</span>, and <span className="italic">structured</span>. These categories
        are classified as <span className="italic">elementary data</span>{" "}
          <AdditionalInformations small={true} information="including numerical, textual, image, audio and category data" />{" "}
          representing a single <span className="italic">unorganised data</span> type, or <span className="italic">composite data</span>{" "}
          <AdditionalInformations small={true} information="including video and structured data" />{" "}
          constituted by different elementary data types. 
        Furthermore, all these data types can be considered according
        to their status: <span className="italic">raw data</span> when used as input to an AI system,
        and <span className="italic">cooked data</span> when processed as output by an AI system.
        </p>
        <p className="flex-1  mt-[33px] mb-[25px]">
        Based on these four formalised poles – <span className="italic">elementary data</span>,
        <span className="italic">composite data</span>, <span className="italic">raw data</span>, <span className="italic">cooked data</span> – and on the seven
        main categories of data types, we positioned all the types
        of data commonly managed by AI systems on a diagram.
        </p>
      </div>
      <AiForDesignersSvg />
    </>)
}

export default DataTypesTab;