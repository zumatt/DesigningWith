import React from "react";
import Layout from "../components/Layout";
import TabDisplay from "../components/TabsDisplay";
import Glossary from "../components/Glossary";
import Bibliography from "../components/Bibliography";
import { useState } from "react";

const Resources = () => {
  const [isToggled, setIsToggled] = useState(true);

  // Function to toggle the variable
  const toggleVariable = () => {
    setIsToggled(!isToggled); // Toggle the variable value
  };
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
                  <div className="flex flex-col md:flex-row gap-2 w-full">
                    <Bibliography title="Bawack, R., Fosso Wamba, S., & Carillo, K. (2019). Where Information Systems Research Meets Artificial Intelligence Practice: Towards the Development of an AI Capability Framework. Proceedings of DIGIT 2019, 5. " link="https://aisel.aisnet.org/digit2019/5 "/>
                    <Bibliography title="Benjamin, J.J., Berger, A., Merrill, N., & Pierce, J. (2021). Machine Learning Uncertainty as a Design Material: A Post-Phenomenological Inquiry. Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (CHI '21), Association for Computing Machinery, USA, Article 171, 1–14. " link="https://doi.org/10.1145/3411764.3445481"/>
                    <Bibliography title="Board of Innovation. (2023, October 04). AI Tools for Innovators." link="https://boardofinnovation.notion.site/AI-Tools-for-Innovators-7a80ab30bcfd4a15846436aa347d5af2 "/>
                    <Bibliography title="Bobbe, T., Krzywinski, J., & Woelfel, C. (2016). A comparison of design process models from academic theory and professional practice. Proceedings of the DESIGN 2016 14th International Design Conference, 1205-1214." link="https://management.designsociety.org/download-publication/38931/"/>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 w-full">
                    <Bibliography title="Cautela, C., Mortati, M., Dell’Era, C., & Gastaldi, L. (2019). The impact of Artificial Intelligence on Design Thinking practice: Insights from the Ecosystem of Startups. Strategic Design Research Journal, 12(1), 114–134." link="https://doi.org/10.4013/sdrj.2019.121.08 "/>
                    <Bibliography title="Chiodo, E., Aquila, M., & Gallo, D. (2018). A MULTIDISCIPLINARY APPROACH TO DESIGN EDUCATION. Proceedings of the 11th annual International Conference of Education, Research and Innovation, Spain, 1955-1962." link="https://doi.org/10.21125/iceri.2018.1427 "/>
                    <Bibliography title="Derksen, G.(2023) A production pipeline for an ai-powered design course, in D. De Sainz Molestina, L. Galluzzo, F. Rizzo, D. Spallazzo (Eds.), IASDR 2023: Life-Changing Design." link="https://doi.org/10.21606/iasdr.2023.284 "/>
                    <Bibliography title="De Silva, D., & Alahakoon, D. (2022). An artificial intelligence life cycle: From conception to production. Patterns, 3(6). 100489." link="http://dx.doi.org/10.1016/j.patter.2022.100489"/>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 w-full">
                    <Bibliography title="Design Council. (n.d.). The design process. In Eleven lessons: managing design in eleven global brands. Retrieved October 27, 2023, from " link="https://www.designcouncil.org.uk/fileadmin/uploads/dc/Documents/ElevenLessons_Design_Council%2520%25282%2529.pdf "/>
                    <Bibliography title="Design Council. (2021). The design process. In Beyond Net Zero A Systematic Design Approach. " link="https://www.designcouncil.org.uk/fileadmin/uploads/dc/Documents/Beyond%2520Net%2520Zero%2520-%2520A%2520Systemic%2520Design%2520Approach.pdf "/>
                    <Bibliography title="Dove, G., Halskov, K., Forlizzi, J., & Zimmerman, J. (2017). UX Design Innovation: Challenges for Working with Machine Learning as a Design Material. Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems (CHI '17), Association for Computing Machinery, USA, 278–288." link="https://doi.org/10.1145/3025453.3025739 "/>
                    <Bibliography title="Fiebrink, R. (2019). Machine learning education for artists, musicians, and other creative practitioners. ACM Transactions on Computing Education, 19(4), 1-32. " link="https://doi.org/10.1145/3294008"/>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 w-full">
                    <Bibliography title="Figoli, F. A., Rampino, L., & Mattioli, F. (2022) AI in design idea development: A workshop on creativity and human-AI collaboration. In Lockton, D., Lenzi, S., Hekkert, P., Oak, A., Sádaba, J., Lloyd, P. (Eds.), Proceedings of the DRS2022: Bilbao, 25 June - 3 July, Bilbao, Spain." link="https://doi.org/10.21606/drs.2022.414"/>
                    <Bibliography title="Holmquist, L. E. (2017). Intelligence on tap: Artificial Intelligence as a New Design Material. Interactions, 24(4), 28-33." link="https://doi.org/10.1145/3085571"/>
                    <Bibliography title="Huang, J., Johanes, M., Kim, F. C., Doumpioti, C., & Holz, G. C. (2021). On GANs, NLP and Architecture: Combining Human and Machine Intelligences for the Generation and Evaluation of Meaningful Designs. Technology Architecture + Design, 5(2), 207-224. " link="https://doi.org/10.1080/24751448.2021.1967060"/>
                    <Bibliography title="Hwang, A. H. (2022). Too Late to be Creative? AI-Empowered Tools in Creative Processes. CHI Conference on Human Factors in Computing Systems Extended Abstracts." link="https://doi.org/10.1145/3491101.3503549"/>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 w-full">
                    <Bibliography title="IDEO. (2009). Human Centered Design Toolkit (2nd ed.)." link="https://cdn2.hubspot.net/hubfs/316071/Resources/Article/IDEO%20Human%20Centered%20Design%20Toolkit%202nd%20Ed.pdf"/>
                    <Bibliography title="IDEO. (2012). Design Thinking for Educators. " link="https://f.hubspotusercontent30.net/hubfs/6474038/Design%20for%20Learning/IDEO_DTEdu_v2_toolkit+workbook.pdf"/>
                    <Bibliography title="IDEO. (2015). Field Guide to Human-Centered Design (1st ed.). " link="https://design-kit-production.s3.us-west-1.amazonaws.com/Field_Guides/Field+Guide+to+Human-Centered+Design_IDEOorg_English.pdf"/>
                    <Bibliography title="Interaction Design Foundation - IxDF. (2016, May 25). What is Design Thinking?. Interaction Design Foundation - IxDF." link="https://www.interaction-design.org/literature/topics/design-thinking"/>
                  </div>
                  
                  {isToggled ? <button onClick={toggleVariable} className="w-full text-center text-[25px] bg-orange bg-opacity-50 rounded-2xl mt-[50px] p-[10px] md:text-[50px]">
                    Explore more
                    </button> : 
                    <div>
                    <div className="flex flex-col md:flex-row gap-2 w-full">
                      <Bibliography title="Iyengar, S. S., & Lepper, M. R. (2000). When choice is demotivating: Can one desire too much of a good thing? Journal of Personality and Social Psychology, 79(6), 995–1006. " link="https://doi.org/10.1037/0022-3514.79.6.995 "/>
                      <Bibliography title="Janiesch, C., Zschech, P., & Heinrich, K. (2021). Machine learning and deep learning. Electronic Markets, 31(3), 685-695." link="https://doi.org/10.1007/s12525-021-00475-2"/>
                      <Bibliography title="Jansen, A., & Colombo, S. (2023). Mix and Match Machine Learning: An Ideation Toolkit to Design Machine Learning-Enabled Solutions. Proceedings of the 17th International Conference on Tangible, Embedded, and Embodied Interaction, Association for Computing Machinery, USA, Article 8, 1-18." link="https://doi.org/10.1145/3569009.3572739"/>
                      <Bibliography title="Janssen, P., Loh, P., Raonic, A., & Schnabel, M. A. (2017). Protocols, Flows and Glitches: Proceedings of the 22nd International Conference on Computer-Aided Architectural Design Research in Asia (CAADRIA 2017). The Association for Computer-Aided Architectural Design Research in Asia (CAADRIA)." link=" "/>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 w-full">
                      <Bibliography title="Jin, X., Evans, M., Dong, H., & Yao, A. (2021). Design heuristics for artificial intelligence: inspirational design stimuli for supporting UX designers in generating AI-powered ideas. ACM CHI Virtual Conference on Human Factors in Computing Systems, Japan, Article 219, 1-8." link="https://doi.org/10.1145/3411763.3451727"/>
                      <Bibliography title="Liao, J., Hansen, P., & Chai, C. (2020). A framework of artificial intelligence augmented design support. Human-Computer Interaction, 35(5–6), 511–544. " link="https://doi.org/10.1080/07370024.2020.1733576"/>
                      <Bibliography title="Liesenfeld, A., Lopez, A., & Dingemanse, M. (2023). Opening up ChatGPT: Tracking openness, transparency, and accountability in instruction-tuned text generators. Proceedings of the 5th International Conference on Conversational User Interfaces, USA, Article 47, 1-6. " link="https://doi.org/10.1145/3571884.3604316"/>
                      <Bibliography title="Malsattar, N., Kihara, T., & Giaccardi, E. (2019). Designing and prototyping from the perspective of AI in the wild. Proceedings of the 2019 ACM Designing Interactive Systems Conference, Association for Computing Machinery, USA, 1083-1088. " link="https://doi.org/10.1145/3322276.3322351"/>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 w-full">
                      <Bibliography title="McCormack, J., Hutchings, P., Gifford, T., Yee-King, M., Llano, M. T., & D'Inverno, M. (2020). Design considerations for real-time collaboration with creative artificial intelligence. Organised Sound, 25(1), 41-52." link="https://doi.org/10.1017/S1355771819000451"/>
                      <Bibliography title="Meyer, M. W., & Norman, D. (2020). Changing Design Education for the 21st Century. She Ji: The Journal of Design, Economics, and Innovation, 6, 13-49." link="https://doi.org/10.1016/j.sheji.2019.12.002"/>
                      <Bibliography title="Miller, C. A., & Parasuraman, R. (2007). Designing for flexible interaction between humans and automation: delegation interfaces for supervisory control. Human Factors: The Journal of the Human Factors and Ergonomics Society, 49(1), 57–75. " link="https://doi.org/10.1518/001872007779598037"/>
                      <Bibliography title="Molino, P., Dudin, Y., & Miryala, S. S. (2019). Ludwig: a type-based declarative deep learning toolbox." link="https://arxiv.org/abs/1909.07930"/>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 w-full">
                      <Bibliography title="Muller, M., Chilton, L. B., Kantosalo, A., Martin, C. P., & Walsh, G. (2022). GenAICHI: Generative AI and HCI. Extended Abstracts of the 2022 CHI Conference on Human Factors in Computing Systems, USA, Article 110, 1-7." link="https://doi.org/10.1145/3491101.3503719"/>
                      <Bibliography title="Peixeiro, M. (2019, August 7). The Complete Guide to Time Series Analysis and Forecasting. Medium. " link="https://towardsdatascience.com/the-complete-guide-to-time-series-analysis-and-forecasting-70d476bfe775"/>
                      <Bibliography title="Rozendaal, M. C., Ghajargar, M., Pasman, G., & Wiberg, M. (2018). Giving form to smart objects: Exploring intelligence as an interaction design material. Human-computer Interaction Series, 25–42." link="https://doi.org/10.1007/978-3-319-73356-2_3"/>
                      <Bibliography title="Sarker, I. H. (2021). Machine learning: algorithms, Real-World applications and research directions. SN Computer Science, 2(3)." link="https://doi.org/10.1007/s42979-021-00592-x"/>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 w-full">
                      <Bibliography title="Schuh, G., Reinhart, G., Prote, J., Sauermann, F., Horsthofer, J., Oppolzer, F., & Knoll, D. (2019). Data mining definitions and applications for the management of production complexity. Procedia CIRP, 81, 874–879." link="https://doi.org/10.1016/j.procir.2019.03.217"/>
                      <Bibliography title="Shin, J. G., Koch, J., Lucero, A., Dalsgaard, P., & Mackay, W. E. (2023). Integrating AI in Human-Human Collaborative Ideation. Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems, Germany, Article 355, 1-5. " link="https://doi.org/10.1145/3544549.3573802"/>
                      <Bibliography title="Simeone, L., Mantelli, R., and Adamo, A. (2022) Pushing divergence and promoting convergence in a speculative design process: Considerations on the role of AI as a co-creation partner. In Lockton, D., Lenzi, S., Hekkert, P., Oak, A., Sádaba, J., Lloyd, P. (Eds.), Proceedings of the DRS2022: Bilbao, 25 June - 3 July, Bilbao, Spain. " link="https://doi.org/10.21606/drs.2022.197"/>
                      <Bibliography title="van der Burg, V., Akdag Salah, A., Chandrasegaran, S., and Lloyd, P. (2022) Ceci n’est pas une chaise: Emerging practices in designer-AI collaboration. In Lockton, D., Lenzi, S., Hekkert, P., Oak, A., Sádaba, J., Lloyd, P. (Eds.), Proceedings of the DRS2022: Bilbao, 25 June - 3 July, Bilbao, Spain." link="https://doi.org/10.21606/drs.2022.653"/>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 w-full">
                      <Bibliography title="Van Der Maden, W., Van Beek, E., Nicenboim, I., Van Der Burg, V., Kun, P., Lomas, D., and Kang, E. (2023). Towards a Design (Research) Framework with Generative AI. Proceedings of the 2023 ACM Designing Interactive Systems Conference, USA, 107–109. " link="https://doi.org/10.1145/3563703.3591453"/>
                      <Bibliography title="Xu, W. (2023). AI in HCI Design and User Experience. https://arxiv.org/abs/2301.00987 
  Yang, Q., Banovic, N., & Zimmerman, J. (2018). Mapping Machine Learning Advances from HCI Research to Reveal Starting Places for Design Innovation. Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems, Canada, Paper 130, 1-11. 
  " link="https://doi.org/10.1145/3173574.3173704"/>
                      <Bibliography title="Yang, Q., Steinfeld, A., Rosé, C.P., & Zimmerman, J. (2020). Re-examining Whether, Why, and How Human-AI Interaction Is Uniquely Difficult to Design. Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems, USA, 1-13. " link="https://doi.org/10.1145/3313831.3376301"/>
                    </div> 
                    <button onClick={toggleVariable} className="w-full text-center text-[25px] bg-orange bg-opacity-50 rounded-2xl mt-[50px] p-[10px] md:text-[50px]">
                      Explore less
                    </button>
                  </div>
                  }
                  
                  
                  
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
