import React from "react";
import Layout from "../components/Layout";
import TabDisplay from "../components/TabsDisplay";
import Glossary from "../components/Glossary";
import Bibliography from "../components/Bibliography";

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
                <div className="flex flex-col md:flex-row justify-between gap-[14px] my-[20px]">
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
                <div className=" flex flex-col gap-2">
                  <h1 className=" w-full flex bg-orange rounded-lg p-4 my-4 bg-opacity-50 shadow-inner">
                    Design Phases
                  </h1>
                  <Glossary title="Understand" explaination="Investigate the context, target groups, and stakeholders through research to explore, discover and analyse needs, barriers, attitudes, and aspirations"/>
                  <Glossary title="Define" explaination="Gather insights from the research to frame key findings to outline specific design opportunities and challenges" />
                  <Glossary title="Ideate" explaination="Generate ideas for new design solutions in response to opportunities and challenges" />
                  <Glossary title="Prototype" explaination="Transforming ideas into a concrete solution, making samples for use, observation, and evaluation in their context" />
                  <Glossary title="Develop" explaination="Shaping in detail the final solution after appropriate refinements and testing" />
                  <Glossary title="Release" explaination="Communicate, distribute, publish, and make open solutions and outputs available to the target groups, stakeholders, as well as the whole society" />
                  <h1 className=" w-full flex bg-orange rounded-lg p-4 my-4 bg-opacity-50 shadow-inner">
                  AI Capabilities
                  </h1>
                  <Glossary title="Classify" explaination="Identifying by or dividing data into classes based on similar features" />
                  <Glossary title="Collect" explaination="Gathering data from physical or digital environments driven by research interests" />
                  <Glossary title="Debug" explaination="Finding and fixing errors in given data" />
                  <Glossary title="Generate" explaination="Creating new data or content based on given instructions or parameters" />
                  <Glossary title="Optimise" explaination="Improving data quality and performance" />
                  <Glossary title="Rank" explaination="Organising hierarchies based on data relevance within a given context" />
                  <Glossary title="Recognise" explaination="Detecting and identifying patterns in data based on given instruction or previous knowledge" />
                  <Glossary title="Recommend" explaination="Suggesting contents based on past behaviours, preferences, or relevance within a given context" />
                  <Glossary title="Summarise" explaination="Selecting and disclosing relevant data with the overall meaning" />
                  <Glossary title="Test" explaination="Evaluating the performance and functionality based on parameters" />
                  <Glossary title="Translate" explaination="Transforming (existing) data from one domain to another preserving context meaning" />
                  <Glossary title="Visualise" explaination="Transforming data into visual outputs useful for exploration or explanation." />
                  <h1 className=" w-full flex bg-orange rounded-lg p-4 my-4 bg-opacity-50 shadow-inner">
                  Data Types
                  </h1>
                  <Glossary title="Raw Data" explaination="Data used as input to an AI system by users" />
                  <Glossary title="Cooked Data" explaination="Data processed as output by an AI system" />
                  <Glossary title="Elementary Data" explaination="A single data type that lacks structure or organization" />
                  <Glossary title="Composite Data" explaination="A data type constituted by organised elementary data types. " />
                  <h1 className=" w-full flex bg-orange rounded-lg p-4 my-4 bg-opacity-50 shadow-inner">
                  Educational Framework
                  </h1>
                  <Glossary title="Educational Objective
" explaination="Description of the expected results in terms of knowledge and skills students should acquire from an educational module." />
                  <Glossary title="Instructional Activities
" explaination="Description of how educational objectives are accomplished, providing tasks and exercises teachers must prepare and conduct during the module to facilitate student learning.
" />
                </div>

              </>
            ),
          },
          {
            title: "Bibliography",
            mobileTitle: "",
            elements: (
              <>
                <div className="flex flex-col md:flex-row justify-between gap-[14px] mt-[20px]">
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
                <div className="flex flex-col w-full gap-2">
                  <div className="flex flex-row gap-2 w-full">
                    <Bibliography title="Bawack, R., Fosso Wamba, S., & Carillo, K. (2019). Where Information Systems Research Meets Artificial Intelligence Practice: Towards the Development of an AI Capability Framework. Proceedings of DIGIT 2019, 5. " link="https://aisel.aisnet.org/digit2019/5 "/>
                    <Bibliography title="Benjamin, J.J., Berger, A., Merrill, N., & Pierce, J. (2021). Machine Learning Uncertainty as a Design Material: A Post-Phenomenological Inquiry. Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (CHI '21), Association for Computing Machinery, USA, Article 171, 1–14. " link="https://doi.org/10.1145/3411764.3445481"/>
                    <Bibliography title="Board of Innovation. (2023, October 04). AI Tools for Innovators." link="https://boardofinnovation.notion.site/AI-Tools-for-Innovators-7a80ab30bcfd4a15846436aa347d5af2 "/>
                    <Bibliography title="Bobbe, T., Krzywinski, J., & Woelfel, C. (2016). A comparison of design process models from academic theory and professional practice. Proceedings of the DESIGN 2016 14th International Design Conference, 1205-1214." link="https://management.designsociety.org/download-publication/38931/"/>
                  </div>
                  <div className="flex flex-row gap-2 w-full">
                    <Bibliography title="Cautela, C., Mortati, M., Dell’Era, C., & Gastaldi, L. (2019). The impact of Artificial Intelligence on Design Thinking practice: Insights from the Ecosystem of Startups. Strategic Design Research Journal, 12(1), 114–134." link="https://doi.org/10.4013/sdrj.2019.121.08 "/>
                    <Bibliography title="Chiodo, E., Aquila, M., & Gallo, D. (2018). A MULTIDISCIPLINARY APPROACH TO DESIGN EDUCATION. Proceedings of the 11th annual International Conference of Education, Research and Innovation, Spain, 1955-1962." link="https://doi.org/10.21125/iceri.2018.1427 "/>
                    <Bibliography title="Derksen, G.(2023) A production pipeline for an ai-powered design course, in D. De Sainz Molestina, L. Galluzzo, F. Rizzo, D. Spallazzo (Eds.), IASDR 2023: Life-Changing Design." link="https://doi.org/10.21606/iasdr.2023.284 "/>
                    <Bibliography title="De Silva, D., & Alahakoon, D. (2022). An artificial intelligence life cycle: From conception to production. Patterns, 3(6). 100489." link="http://dx.doi.org/10.1016/j.patter.2022.100489"/>
                  </div>
                  <div className="flex flex-row gap-2 w-full">
                    <Bibliography title="Design Council. (n.d.). The design process. In Eleven lessons: managing design in eleven global brands. Retrieved October 27, 2023, from " link="https://www.designcouncil.org.uk/fileadmin/uploads/dc/Documents/ElevenLessons_Design_Council%2520%25282%2529.pdf "/>
                    <Bibliography title="Design Council. (2021). The design process. In Beyond Net Zero A Systematic Design Approach. " link="https://www.designcouncil.org.uk/fileadmin/uploads/dc/Documents/Beyond%2520Net%2520Zero%2520-%2520A%2520Systemic%2520Design%2520Approach.pdf "/>
                    <Bibliography title="Dove, G., Halskov, K., Forlizzi, J., & Zimmerman, J. (2017). UX Design Innovation: Challenges for Working with Machine Learning as a Design Material. Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems (CHI '17), Association for Computing Machinery, USA, 278–288." link="https://doi.org/10.1145/3025453.3025739 "/>
                    <Bibliography title="Fiebrink, R. (2019). Machine learning education for artists, musicians, and other creative practitioners. ACM Transactions on Computing Education, 19(4), 1-32. " link="https://doi.org/10.1145/3294008"/>
                  </div>
                  <div className="flex flex-row gap-2 w-full">
                    <Bibliography title="Figoli, F. A., Rampino, L., & Mattioli, F. (2022) AI in design idea development: A workshop on creativity and human-AI collaboration. In Lockton, D., Lenzi, S., Hekkert, P., Oak, A., Sádaba, J., Lloyd, P. (Eds.), Proceedings of the DRS2022: Bilbao, 25 June - 3 July, Bilbao, Spain." link="https://doi.org/10.21606/drs.2022.414"/>
                    <Bibliography title="Holmquist, L. E. (2017). Intelligence on tap: Artificial Intelligence as a New Design Material. Interactions, 24(4), 28-33." link="https://doi.org/10.1145/3085571"/>
                    <Bibliography title="Huang, J., Johanes, M., Kim, F. C., Doumpioti, C., & Holz, G. C. (2021). On GANs, NLP and Architecture: Combining Human and Machine Intelligences for the Generation and Evaluation of Meaningful Designs. Technology Architecture + Design, 5(2), 207-224. " link="https://doi.org/10.1080/24751448.2021.1967060"/>
                    <Bibliography title="Hwang, A. H. (2022). Too Late to be Creative? AI-Empowered Tools in Creative Processes. CHI Conference on Human Factors in Computing Systems Extended Abstracts." link="https://doi.org/10.1145/3491101.3503549"/>
                  </div>
                  <div className="flex flex-row gap-2 w-full">
                    <Bibliography title="IDEO. (2009). Human Centered Design Toolkit (2nd ed.)." link="https://cdn2.hubspot.net/hubfs/316071/Resources/Article/IDEO%20Human%20Centered%20Design%20Toolkit%202nd%20Ed.pdf"/>
                    <Bibliography title="IDEO. (2012). Design Thinking for Educators. " link="https://f.hubspotusercontent30.net/hubfs/6474038/Design%20for%20Learning/IDEO_DTEdu_v2_toolkit+workbook.pdf"/>
                    <Bibliography title="IDEO. (2015). Field Guide to Human-Centered Design (1st ed.). " link="https://design-kit-production.s3.us-west-1.amazonaws.com/Field_Guides/Field+Guide+to+Human-Centered+Design_IDEOorg_English.pdf"/>
                    <Bibliography title="Interaction Design Foundation - IxDF. (2016, May 25). What is Design Thinking?. Interaction Design Foundation - IxDF." link="https://www.interaction-design.org/literature/topics/design-thinking"/>
                  </div>
                  <a
                  href="/interactive-framework"
                  className="w-full bg-orange bg-opacity-50 rounded-2xl mt-[50px] p-[10px]"
                >
                    <p className="w-full text-center text-[25px] md:text-[50px]">
                      Explore more
                    </p>
                  </a>
                </div>
              </>
            ),
          },
        ]}
      />
      <p className="text-[12px] md:text-[15px] mt-10">
        © 2022. This project is licensed under CC BY 4.0. Supported by Movetia.
        Exchange and mobility.
      </p>
    </Layout>
  );
};

export default Resources;
