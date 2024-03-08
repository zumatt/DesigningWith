import React from "react";
import Layout from "../components/Layout";
import GuidelinesAccordeon from "../components/GuidelinesAccordeon";
import AdditionalInformations from "../components/AdditionalInformations";
import TabDisplay from "../components/TabsDisplay";
import DidacticGuidelineSvg from "../components/DidacticGuidelineSvg";

const DidacticGuidelines = () => {
  return (
    <Layout>
      <h1 className="mt-[33px]">The Guidelines</h1>
      <h2 className="mt-[10px]">
        The didactic guidelines are structured to provide teachers with
        Educational Objectives{" "}
        <AdditionalInformations information="The Educational Objectives describe the knowledge and skills that students are intended to acquire" />
        , Instructional Activities{" "}
        <AdditionalInformations information="The Instructional Activities illustrate tasks and exercises teachers must prepare and conduct during the module to facilitate student learning" />{" "}
        and Recommendations{" "}
        <AdditionalInformations information="Recommendations suggest the students' working modalities (individual or group) and details to carry the activity on." />{" "}
        for the autonomous implementation of teaching modules on AI in design
        courses.
      </h2>
      <div className="w-full mt-[20px] flex justify-center items-center rounded-xl">
        <DidacticGuidelineSvg />
      </div>
      <TabDisplay
        tabs={[
          {
            title: "Didactic Guidelines",
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
                <GuidelinesAccordeon title="Getting Familiar with - Module 1">
                  <h1 className="mt-[40px]">Overall Objective</h1>
                  <h2 className="mt-[15px]">
                    Combining the three sub-modules (ML, GenAI, CV) students
                    will learn to employ AI to train, generate, analyze and
                    visualize data for specific design purposes.
                  </h2>
                  <div className="flex flex-row gap-[30px] mt-[70px]">
                    <p className=" w-1/2">
                      To promote the development of <i>personal skills</i>,
                      students are suggested to <i>work individually</i>.
                      Teachers can arrange the duration of each activity based
                      on the level of in-depth study required {"["}
                      example{"]"}. Sub-modules are not strictly related to each
                      other.
                    </p>
                    <p className=" w-1/2">
                      The application of all of them is not mandatory, teachers
                      can make a selection based on needs and interests. The
                      structure of the sub-modules is not designed based on the
                      tool mentioned in the guideline. For a more complete list
                      of tools, refer to the Designing With framework {"["}link
                      {"]"}.
                    </p>
                  </div>
                  <a
                    href="/assets/data/pdf/example.pdf"
                    download="Example"
                    className="w-1/2 bg-[#8CD782] rounded-2xl mt-[50px]"
                  >
                    <p className="w-full text-[29px] p-2">
                      Download the Didactic Guidelines - Module 1
                    </p>
                  </a>
                  <GuidelinesAccordeon title="Getting Familiar with Machine Learning (ML) – Sub-module 1">
                    <h1 className="mt-[40px]">Educational Objective</h1>
                    <h2 className="mt-[15px]">
                      Students will learn to train simplified ML models to
                      create design artefacts
                    </h2>
                    <div className=" w-full flex flex-row gap-[30px] mt-[70px]">
                      <p className=" w-1/2">
                        Students develop procedural knowledge through practical
                        guided activities (e.g. RunwayML step-by-step tool
                        tutorials)
                      </p>
                      <p className=" w-1/2">
                        and they are asked to apply the acquired procedure to a
                        familiar task (e.g. creating a logo).
                      </p>
                    </div>
                    <h1 className="mt-[40px]">Instructional Activities</h1>
                    <div className=" flex flex-row gap-[30px] mt-[70px]">
                      <p className=" w-1/2">
                        Students are first provided with a basic literacy of ML
                        including technical vocabulary ML-Act1 and primary
                        functionalities ML-Act2. This activity is meant to
                        promote factual and conceptual knowledge by teaching the
                        basic elements of the discipline and their
                        interrelationship to explain the functionality of ML
                        tools. Once basic literacy is introduced, specific case
                        studies are provided to contextualise the application of
                        ML within the design practice ML-Act3. At this point,
                        the teaching moves from a theoretical to a procedural
                        level. In this direction, students are first introduced
                        to a guided tutorial ML-Act4.3 on how to use an ML tool
                        (e.g. runway) starting from setting a design goal
                        ML-Act4.1 and creating their dataset ML-Act4.2
                        activities intended to introduce students in
                        familiarising, collecting or creating data .
                      </p>
                      <p className=" w-1/2">
                        Then, to familiarise themselves with the procedure,
                        students individually apply what they learned by
                        training an ML model aligned with the design goal
                        ML-Act5. Lastly, moving the focus to meta-cognitive
                        knowledge, students are asked to analyse and document
                        the process by breaking down the steps and selecting the
                        relevant results ML-Act6. This activity aims to create
                        awareness and knowledge of cognition. To foster
                        participation and sharing of results, students are asked
                        to present their work and question others ML-Act7.
                      </p>
                    </div>
                    <a
                      href="/assets/data/pdf/example.pdf"
                      download="Example"
                      className="w-1/2 bg-[#8CD782] rounded-2xl mt-[50px]"
                    >
                      <p className="w-full text-[29px] p-2">
                        Download the Didactic Guidelines - Sub-module 1
                      </p>
                    </a>
                  </GuidelinesAccordeon>
                  <GuidelinesAccordeon title="Getting Familiar with Machine Learning (ML) – Sub-module 2"></GuidelinesAccordeon>
                  <GuidelinesAccordeon title="Getting Familiar with Machine Learning (ML) – Sub-module 3"></GuidelinesAccordeon>
                </GuidelinesAccordeon>
                <GuidelinesAccordeon title="Get in Depth– Module 2">
                  <h1 className="mt-[40px]">Educational Objective</h1>
                  <h2 className="mt-[15px]">
                    Students will learn to choose and apply AI/ML/CV tools for
                    specific activities of the design process.
                  </h2>
                  <div className="flex flex-row gap-[30px] mt-[70px]">
                    <p className=" w-1/2">
                      To face this module, students need some basic knowledge of
                      the disciplines involved and some practice of tools. For
                      this reason, the selection of tools provided to students
                      within this module depends on the skills acquired during
                      the first module or prior knowledge.
                    </p>
                    <p className=" w-1/2">
                      To define the set of tools suitable, refer to the
                      DesigningW/ framework. Working in groups (5-6 people) is
                      recommended for this module, as collaboration facilitates
                      addressing complex challenges. Additionally, a
                      multidisciplinary approach incentivises different
                      perspectives to emerge.
                    </p>
                  </div>
                  <h1 className="mt-[40px]">Instructional Activities</h1>
                  <div className="flex flex-row gap-[30px] mt-[10px]">
                    <p className=" w-1/2">
                      Students are first provided with a design challenge to
                      drive the activity {"{"} Module2-Act1{"}"}. The design
                      challenge provides a macro area for students to experiment
                      with tools based on specific research questions and tasks.
                      Examples of these challenges are designing for climate
                      change and designing for twin cities. A detailed
                      description is available from the Designing With Workshop
                      repository [ example ]. To help students understand the
                      challenge, case studies are provided. Working on
                      challenges contributes to developing a knowledge dimension
                      as students are asked to understand the interrelationship
                      of basic elements (acquired in Module 1) and make them
                      function together within a larger structure. Once the
                      context is set, tools are introduced through the Designing
                      With Framework
                      {"{"} Module2-Act1 {"}"}. The framework aims to introduce
                      students to exploring tools of AI/ML/CV, understanding
                      their capabilities, and applying them within a design
                      process. Additionally, the framework promotes a data-based
                      approach, bringing students closer to a design practice
                      led by data input and output. The data-based approach is
                      useful, especially in promoting the method of inquiry,
                      which is part of the procedural knowledge dimension
                      developed within this activity. Fostering the exploration
                      of tools through the framework aims to infuse in students
                      a method of design with AI.
                    </p>
                    <p className=" w-1/2">
                      During the process, students are asked to document this
                      method. For this purpose, a structured template [ example
                      ] is introduced {"{"} Module2-Act3{"}"}. While in Module 1
                      documentation is one of the final activities, for the
                      second module, keeping track of the steps, tools and
                      choices at each of the design phases is encouraged to
                      foster the acquisition of the method. During these
                      activities, supervision from tutors and experts in the
                      field is useful for choosing {"{"} Module2-Act4{"}"} and
                      properly applying AI tools
                      {"{"} Module2-Act5{"}"} for specific tasks defined based
                      on the initial challenge. Two rounds of revisions are
                      planned: the first one {"{"} Module2-Act4{"}"} aims to
                      support students in choosing the appropriate tools and
                      refining the design concept; while the second one {"{"}{" "}
                      Module2-Act5 {"}"} focuses on providing technical support
                      in using the tools, as this second revision comes later
                      when students are supposed to have the concept already
                      defined and move to the prototyping and implementing
                      phase. To allow teachers to assess the activities and
                      future implementation of the module, students are asked
                      for feedback. {"{"} Module2-Act6{"}"} This activity
                      contributes to creating awareness and knowledge of
                      cognition, improving the meta-cognitive knowledge of
                      students. Lastly, to foster participation and sharing of
                      results, students are asked to present their work and
                      question others {"{"} Module2-Act6{"}"} .
                    </p>
                  </div>
                  <a
                    href="/assets/data/pdf/example.pdf"
                    download="Example"
                    className="w-1/2 bg-[#8CD782] rounded-2xl mt-[50px]"
                  >
                    <p className="w-full text-[29px] p-2">
                      Download the Didactic Guidelines - Module 2
                    </p>
                  </a>
                </GuidelinesAccordeon>
              </>
            ),
          },
          {
            title: "About didactic guidelines",
            mobileTitle: "",
            elements: (
              <>
                <div className="flex flex-row justify-between gap-[14px] mt-[20px] mb-[20px]">
                  <p className="flex-1">
                    To build the didactic guidelines aimed to systematically
                    integrate AI tools into design curricula, we referred to
                    Bloom’s Taxonomy, which is one of the most recognized and
                    widely used frameworks in the field of education. More
                    specifically we considered the Anderson & Krathwohl (2001)
                    model revised for 21st-Century learners.
                  </p>
                  <p className="flex-1">
                    The following sections explain the specific components of
                    the taxonomy ( Krathwohl and Payne, 1971). and illustrate
                    how these components are combined together to build the
                    didactic guidelines.
                  </p>
                </div>
                <h2>1.1 Categories of Knowledge Dimensions</h2>
                <div className="flex flex-row mt-[20px] gap-[14px]">
                  <div className="flex flex-col w-1/2">
                    <p className=" text-[29px]">
                      Knowledge can be classified in four dimensions: 
                    </p>
                    <br />
                    <br />
                    <p className=" text-[29px]">
                      (a) Factual knowledge refers to the basic elements
                      students must know to be acquainted with a discipline or
                      solve problems in itterminology and specific details; 
                    </p>
                    <p className=" text-[29px]">
                      (b) Conceptual knowledge, refers to classification,
                      categories, principles and to the interrelationships among
                      the basic elements within a larger structure that enable
                      them to function together.{" "}
                    </p>
                    <p className=" text-[29px]">
                      (c) Procedural Knowledge, refers to skills algorithms,
                      techniques and methods of inquiry; 
                    </p>
                    <p className=" text-[29px]">
                      (d) Metacognitive Knowledge, refers to a cognitive task,
                      strategies and self-awareness.{" "}
                    </p>
                  </div>
                  <div className=" w-1/2 flex flex-col">
                    <div className="flex flex-row">
                      <p className="w-1/2 text-[16px]">
                        Major types and subtypes
                      </p>
                      <p className="w-1/2 text-[16px]">Examples</p>
                    </div>
                  </div>
                </div>
              </>
            ),
          },
        ]}
      />
    </Layout>
  );
};

export default DidacticGuidelines;
