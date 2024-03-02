import Layout from "../components/Layout";
import AdditionalInformations from "../components/AdditionalInformations";
import TabDisplay from "../components/TabsDisplay";

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
            elements: (
              <div>
                <h2>
                  A set of 12 AI capabilities structuring a basic AI literacy
                  for designers
                </h2>
                <div className="flex flex-row justify-between gap-[14px] mt-[50px]">
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
                    to the principles of input and output . data, and a
                    practical example are provided.
                  </p>
                </div>
              </div>
            ),
          },
          {
            title: "(b) Data types",
            elements: (
              <div>
                <h2>
                  A classification of 7 data types handled by AI tools as input
                  and output
                </h2>
                <div className="flex flex-row justify-between gap-[14px] mt-[50px]">
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
            ),
          },
          {
            title: "(c) Design process",
            elements: (
              <div>
                <h2>
                  The definition of a design model consisting of 6 design stages
                  suitable for bring new knowledge into the educational context
                </h2>
                <div className="flex flex-row justify-between gap-[14px] mt-[50px]">
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
              </div>
            ),
          },
          {
            title: "(d) AI tool collection",
            elements: (
              <div>
                <h2>AI tool collection</h2>
                <div className="flex flex-row justify-between gap-[14px] mt-[50px]">
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
                  <p className="w-full text-center text-[50px]">
                    Explore the collection
                  </p>
                </a>
              </div>
            ),
          },
        ]}
      />
    </Layout>
  );
};

export default AIForDesigners;
