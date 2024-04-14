import { TabElement } from "../TabsDisplay";
import AiForDesignersSvg from "../AiForDesignersSvg";
import AdditionalInformations from "../AdditionalInformations";

const DataTypesTab: TabElement = {
  title: "(b) Data types",
  mobileTitle: "(b)",
  elements: (
    <div className="flex flex-col gap-2">
      <div className="bg-[#D9D9D9] bg-opacity-50 shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] shadow-white px-4 py-6 rounded-b-2xl">
       
        <h2>
          A classification of 7 data types handled by AI tools as input
          and output
        </h2>
        <div className="flex flex-col md:flex-row justify-between md:gap-[14px] mt-[50px]">
          <p className="flex-1">
            Input and output data play pivotal roles when working with
            AI. Identifying the data type is fundamental to choosing the
            most suitable tool and producing the expected outcome.
          </p>
          <p className="flex-1">
            For the reason of supporting designers working with data, we
            first make clear what is meant by input and output data.
          </p>
        </div>
      </div>
    </div>
  ),
  extra: (
    <>
    <h2 className="p-4 rounded-2xl mb-2" style={{boxShadow: "0px 0px 100px 5px #FFFFFF inset", backgroundColor: "#72DAFB"}}>
        Input data refers to the information that is given by a
        designer to an AI system, model, or algorithm to be processed
        or analysed.
      </h2>
      <h2 className="p-4 rounded-2xl mb-2" style={{boxShadow: "0px 0px 100px 5px #FFFFFF inset", backgroundColor: "#5B99F4"}}>
        Output data pertains to the outcome produced by a system as a
        result of processing the input data.{" "}
      </h2>
      <div className="flex flex-col md:flex-row justify-between md:gap-[14px] glassBox p-4 rounded-2xl">
        <p className="flex-1">
          Based on these definitions, we then introduce seven
          categories of data: numerical, textual, image, audio,
          category, video, and structured. These categories are
          classified as elementary data{" "}
          <AdditionalInformations information=" Composite data includes video data and structured data " />{" "}
          representing a single unorganised data type, or composite
          data{" "}
          <AdditionalInformations information=" Composite data includes video data and structured data " />{" "}
           constituted by different elementary data types. 
        </p>
        <p className="flex-1">
          Furthermore, all these data types can be considered
          according to their status: raw data when used as input to an
          AI system, and cooked data when processed as output by an AI
          system. Based on these four formalised poles – elementary
          data, composite data, raw data, cooked data – and on the
          seven main categories of data types, we positioned all the
          types of data commonly managed by AI systems on a map.
        </p>
      </div>
      <AiForDesignersSvg />
    </>)
}

export default DataTypesTab;