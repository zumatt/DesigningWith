import React from "react";
import Layout from "../components/Layout";
import TabDisplay from "../components/TabsDisplay";

const Resources = () => {
  return (
    <Layout>
      <h1 className="mt-[33px]">Resources</h1>
      <h2>
        The resources include a glossary of all the terms developed throughout
        the project, and a curated bibliography that has been used as reference
        literature, useful for those seeking to delve deeper into theoretical
        aspects.
      </h2>
      <TabDisplay
        tabs={[
          {
            title: "Glossary",
            mobileTitle: "",
            elements: (
              <>
                <div className="flex flex-row justify-between gap-[14px] mt-[20px]">
                  <p className="flex-1">
                    The didactic guidelines are based on the following modular
                    infrastructure which is composed of two main modules and
                    their relative sub-modules. The first module (“Getting
                    Familiar”) combines the disciplines of Machine Learning,
                    Generative Artificial Intelligence, and Data Visualization
                    and it is intended to provide basic literacy, guided
                    tutorials, and hands-on experiences.
                  </p>
                  <p className="flex-1">
                    The second module supports students in selecting and
                    employing AI, ML, and CV tools for the design process,
                    addressing a defined project brief to foster the acquisition
                    of a method in designing with AI.
                  </p>
                </div>
                <a
                  href="/assets/data/pdf/example.pdf"
                  download="Example"
                  className="w-full bg-[#8CD782] rounded-2xl mt-[50px] p-[10px]"
                >
                  <p className="w-full text-center text-[50px]">
                    Download the Didactic Guidelines
                  </p>
                </a>
              </>
            ),
          },
          {
            title: "Bibliography",
            mobileTitle: "",
            elements: <></>,
          },
        ]}
      />
    </Layout>
  );
};

export default Resources;
