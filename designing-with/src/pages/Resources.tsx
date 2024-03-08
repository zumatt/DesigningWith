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
                    This section serves as a comprehensive archive of the
                    scientific bibliography that was used as background for this
                    research work. The section brings together a selection of
                    literature spanning the interconnected fields of design
                    education, machine learning and artificial intelligence.
                  </p>
                  <p className="flex-1">
                    This collection not only supports the theoretical framework
                    of the project, but also enriches our understanding by
                    providing a broad spectrum of perspectives and insights into
                    these dynamic and evolving fields.
                  </p>
                </div>
              </>
            ),
          },
          {
            title: "Bibliography",
            mobileTitle: "",
            elements: (
              <>
                <div className="flex flex-row justify-between gap-[14px] mt-[20px]">
                  <p className="flex-1">
                    This section collects all the terms encountered during the
                    process and aims to unpack and clarify their meaning within
                    the specific context of this project and the purpose they
                    have been considered for. The following definitions have
                    been formulated based on the literature and expert
                    interviews to be adapted to combine design and artificial
                    intelligence fields of theory and practice.
                  </p>
                  <p className="flex-1">
                    The glossary also works as a summary of the project,
                    providing a first overview of the contents touched and faced
                    during the process.   
                  </p>
                </div>
              </>
            ),
          },
        ]}
      />
    </Layout>
  );
};

export default Resources;
