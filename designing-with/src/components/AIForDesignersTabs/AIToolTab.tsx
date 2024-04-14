import { TabElement } from "../TabsDisplay";

const AIToolTab: TabElement = {
  title: "(d) AI tool collection",
  mobileTitle: "(d)",
  elements: (
    <div className="flex flex-col">
      <div className="bg-[#D9D9D9] bg-opacity-50 shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] shadow-white px-4 py-6 rounded-b-2xl">
        <h2>AI tool collection</h2>
        <div className="flex flex-col md:flex-row justify-between gap-[14px] mt-[50px]">
          <p className="flex-1">
            To support teachers and students in familiarizing with the framework
            and accessing the AI tools, we propose an interactive dendrogram. The
            dendrogram collects about 130 tools which are organised based on the
            four components of the framework: design stages, AI capabilities, data
            types - input and output.
          </p>
          <p className="flex-1">
            <i>Tools</i> are selected based on their functionality and potential
            in the field of design to offer a limited and qualitative number of
            resources suitable to support students in designing with AI.
          </p>
        </div>
        <a
      href="/interactive-framework"
      className="w-full md:hidden flex rounded-2xl p-[10px] mt-6 bg-[#D9D9D9] bg-opacity-50 shadow-[inset_0_0_35px_20px_rgba(1,1,1,0)] shadow-[#72DAFB]"
    >
      <p className="w-full text-center text-[25px] md:text-[50px]">
        Explore the collection
      </p>
    </a>
      </div>
    </div>
  ),
  extra: (
    <a
      href="/interactive-framework"
      className="w-full hidden md:flex rounded-2xl p-[10px] bg-[#D9D9D9] bg-opacity-50 shadow-[inset_0_0_35px_20px_rgba(1,1,1,0)] shadow-[#72DAFB]"
      
    >
      <p className="w-full text-center text-[25px] md:text-[50px]">
        Explore the collection
      </p>
    </a>
  ),
};

export default AIToolTab;
