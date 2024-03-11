import Layout from "../components/Layout";
import AdditionalInformations from "../components/AdditionalInformations";
import TabDisplay from "../components/TabsDisplay";
import AiTable from "../components/AITable";
import DesignProcessTable from "../components/DesignProcessTable";
import TextHighlight from "../components/TextHighlight";

const AIForDesigners = () => {
  return (
    <Layout>
      <h1 className="mt-[33px]">AI For Designers</h1>
      <h2 className="mt-[10px]">
        To incorporate artificial intelligence{" "}
        <AdditionalInformations information="In this work, we refer to Artificial Intelligence (AI), considering Machine Learning (ML) and Computer Vision (CV) as a subdomain of AI (Schuh et al., 2019)" />{" "}
        into design education, we introduce a design-oriented framework that
        combines taxonomies from various domains to create knowledge addressing
        both, design students and teachers.{" "}
      </h2>
      <p className="mt-[50px]">
        The framework structures the following components:
      </p>
      <TabDisplay
        tabs={[
          {
            title: "(a) AI capabilities",
            mobileTitle: "(a)",
            elements: (
              <div>
                <h2>
                  A set of 12 AI capabilities structuring a basic AI literacy
                  for designers
                </h2>
                <div className="flex flex-col md:flex-row justify-between md:gap-[14px] mt-[50px]">
                  <p className="flex-1">
                    To use artificial intelligence, designers need first to
                    comprehend its potential, functionality, and limitations.
                    Basic AI literacy empowers designers to integrate these
                    technologies into the design process, optimising outcomes
                    and establishing a synergistic relationship between human
                    intelligence and artificial intelligence.
                  </p>
                  <p className="flex-1">
                    To introduce AI literacy and support designers, we have
                    defined a list of AI capabilities that represent the
                    fundamental functionality of AI systems. For each
                    capability, a theoretical description, structured according
                    to the principles of{" "}
                    <TextHighlight type="input">input</TextHighlight> and{" "}
                    <TextHighlight type="output">output</TextHighlight> data,
                    and a practical example are provided.
                  </p>
                </div>
                <div className="flex flex-col w-full mt-2 gap-2">
                  <p className=" bg-white rounded-lg p-4 md:hidden">
                    AI Capability
                  </p>
                  <div className="hidden md:flex flex-col md:w-full">
                    <AiTable
                      aiCap="AI Capability"
                      desc="Description"
                      example="Example"
                    />
                  </div>
                  <AiTable
                    aiCap="Classify"
                    desc={
                      <>
                        Identifying by or dividing data into{" "}
                        <TextHighlight type="output">classes</TextHighlight>{" "}
                        based on{" "}
                        <TextHighlight type="input">
                          similar features
                        </TextHighlight>
                      </>
                    }
                    example={
                      <>
                        Classify an item in{" "}
                        <TextHighlight type="output">a picture</TextHighlight>{" "}
                        as <TextHighlight type="input">a car</TextHighlight>
                      </>
                    }
                  />
                  <AiTable
                    aiCap="Collect"
                    desc={
                      <>
                        Gathering{" "}
                        <TextHighlight type="output">data</TextHighlight> from
                        physical or digital environments driven by{" "}
                        <TextHighlight type="input">
                          research interests
                        </TextHighlight>
                      </>
                    }
                    example={
                      <>
                        Collecting{" "}
                        <TextHighlight type="output">images</TextHighlight> from
                        an{" "}
                        <TextHighlight type="input">
                          online website
                        </TextHighlight>
                      </>
                    }
                  />
                  <AiTable
                    aiCap="Debug"
                    desc={
                      <>
                        Finding and fixing{" "}
                        <TextHighlight type="output">errors</TextHighlight> in{" "}
                        <TextHighlight type="input">given data</TextHighlight>
                      </>
                    }
                    example={
                      <>
                        Finding{" "}
                        <TextHighlight type="output">errors</TextHighlight> in a{" "}
                        <TextHighlight type="input">
                          string of code
                        </TextHighlight>
                      </>
                    }
                  />
                  <AiTable
                    aiCap="Generate"
                    desc={
                      <>
                        Creating{" "}
                        <TextHighlight type="output">new data</TextHighlight> or
                        contents based on{" "}
                        <TextHighlight type="input">
                          given instructions
                        </TextHighlight>{" "}
                        or{" "}
                        <TextHighlight type="input">parameters</TextHighlight>
                      </>
                    }
                    example={
                      <>
                        Generate an{" "}
                        <TextHighlight type="output">image</TextHighlight> from
                        a{" "}
                        <TextHighlight type="input">text prompt</TextHighlight>
                      </>
                    }
                  />
                  <AiTable
                    aiCap="Optimise"
                    desc={
                      <>
                        Improving{" "}
                        <TextHighlight type="output">data</TextHighlight>{" "}
                        <TextHighlight type="input">quality</TextHighlight> and{" "}
                        <TextHighlight type="input">performance</TextHighlight>
                      </>
                    }
                    example={
                      <>
                        Optimise the{" "}
                        <TextHighlight type="output">
                          pixel resolution
                        </TextHighlight>{" "}
                        of an <TextHighlight type="input">image</TextHighlight>
                      </>
                    }
                  />
                  <AiTable
                    aiCap="Rank"
                    desc="Organising hierarchies based on data relevance within a given context"
                    example="Classification of words according to their use in a text"
                  />
                  <AiTable
                    aiCap="Recognise"
                    desc="Detecting and identifying patterns in data based on given instruction or previous knowledge"
                    example="Detect the presence of cars in a video"
                  />
                  <AiTable
                    aiCap="Recommend"
                    desc="Suggesting contents based on past behaviours, preferences, or relevance within a given context"
                    example="Recommend a colour starting from existing palette"
                  />
                  <AiTable
                    aiCap="Summarise"
                    desc="Selecting and disclosing relevant data with the overall meaning"
                    example="Summarise a text in bullet points"
                  />
                  <AiTable
                    aiCap="Test"
                    desc="Evaluating the performance and functionality based on parameters"
                    example="Test the performance of the SEO website."
                  />
                  <AiTable
                    aiCap="Translate"
                    desc="Transforming (existing) data from one domain to another preserving context meaning"
                    example="Translate a text from English to Spanish"
                  />
                  <AiTable
                    aiCap="Visualise"
                    desc="Transforming data into visual outputs useful for exploration or explanation."
                    example="Visualising a table in a graph (e.g. bar charts)"
                  />
                </div>
              </div>
            ),
          },
          {
            title: "(b) Data types",
            mobileTitle: "(b)",
            elements: (
              <div>
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
                <h2>
                  Input data refers to the information that is given by a
                  designer to an AI system, model, or algorithm to be processed
                  or analysed.
                </h2>
                <h2>
                  Output data pertains to the outcome produced by a system as a
                  result of processing the input data.{" "}
                </h2>
                <div className="flex flex-col md:flex-row justify-between md:gap-[14px] mt-[50px]">
                  <p className="flex-1">
                    Based on these definitions, we then introduce seven
                    categories of data: numerical, textual, image, audio,
                    category, video, and structured. These categories are
                    classified as elementary data{" "}
                    <AdditionalInformations information=" Composite data includes video data and structured data " />{" "}
                    representing a single unorganised data type, or composite
                    data constituted by different elementary data types. 
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
              </div>
            ),
          },
          {
            title: "(c) Design process",
            mobileTitle: "(c)",
            elements: (
              <div>
                <h2>
                  The definition of a design model consisting of 6 design stages
                  suitable for bring new knowledge into the educational context
                </h2>
                <div className="flex flex-col md:flex-row justify-between gap-[14px] mt-[50px]">
                  <p className="flex-1">
                    To integrate the new knowledge into the educational
                    environment and support teachers and students in integrating
                    AI during the design practice, we defined a new design model
                    based on six stages: Understand, define, ideate, prototype,
                    develop, and release.
                  </p>
                  <p className="flex-1">
                    The definition of these stages takes into account the
                    reference models produced by academic institutions,
                    professional organisations and design practices, such as the
                    Double Diamond model ( IDEO, 2009, 2012, 2015) and the
                    design thinking model proposed by Ideo ( Design Council,
                    n.d., 2021).
                  </p>
                </div>
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
                </div>
              </div>
            ),
          },
          {
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
                    Tools are selected based on their functionality and
                    potential in the field of design to offer a limited and
                    qualitative number of resources suitable to support students
                    in designing with AI.
                  </p>
                </div>
                <a
                  href="/interactive-framework"
                  className="w-full bg-[#72DAFB] rounded-2xl mt-[50px] p-[10px]"
                >
                  <p className="w-full text-center text-[25px] md:text-[50px]">
                    Explore the collection
                  </p>
                </a>
              </div>
            ),
          },
        ]}
      />
      <p className="text-[12px] md:text-[15px] mt-12 md:mt-0">
        © 2022. This project is licensed under CC BY 4.0. Supported by Movetia.
        Exchange and mobility.
      </p>
    </Layout>
  );
};

export default AIForDesigners;
