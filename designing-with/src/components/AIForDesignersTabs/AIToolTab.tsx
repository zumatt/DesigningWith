import { TabElement } from "../TabsDisplay";

const AIToolTab: TabElement = {
  title: "(d) AI tool collection",
  mobileTitle: "(d)",
  elements: (
    <div>
      <h2>AI tool collection</h2>
      <div className="flex flex-col md:flex-row justify-between gap-[14px] mt-[50px]">
        <p className="flex-1">
          To support teachers and students in familiarizing with the
          framework and accessing the AI tools, we propose an
          interactive dendrogram. The dendrogram collects about 130
          tools which are organised based on the four components of
          the framework: design stages, AI capabilities, data types -
          input and output.
        </p>
        <p className="flex-1">
          <i>Tools</i> are selected based on their functionality and
          potential in the field of design to offer a limited and
          qualitative number of resources suitable to support students
          in designing with AI.
        </p>
      </div>
      </div>),
      extra: (
      <a
        href="/interactive-framework"
        className="w-full rounded-2xl p-[10px]"
        style={{boxShadow: "0px 0px 100px 5px #72DAFB inset", backgroundColor: "#D9D9D980"}}
      >
        <p className="w-full text-center text-[25px] md:text-[50px]">
          Explore the collection
        </p>
      </a>
  ),
}

export default AIToolTab;