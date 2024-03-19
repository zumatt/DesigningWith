import React from "react";
import Layout from "../components/Layout";
import GuidelinesAccordeon from "../components/GuidelinesAccordeon";
import AdditionalInformations from "../components/AdditionalInformations";
import TabDisplay from "../components/TabsDisplay";
import DidacticGuidelineSvg from "../components/DidacticGuidelineSvg";
import DidacticGuidelineSvgModule1 from "../components/DidacticGuidelineSvgModule1";
import DidacticGuidelineSvgModule2 from "../components/DidacticGuidelineSvgModule2";
import DidacticGuidelineResources from "../components/DidacticGuidelineResources";
import Categories from "../components/Categories";
import CategoriesKnowDim from "../components/CategoriesKnowDim";

const DidacticGuidelines = () => {
  return (
    <Layout>
      <h1 className="mt-[33px]">The Guidelines</h1>
      <h2 className="mt-[10px]">
        The didactic guidelines are structured to provide teachers with{" "}
        <i>Educational Objectives</i>{" "}
        <AdditionalInformations information="The Educational Objectives describe the knowledge and skills that students are intended to acquire" />
        , <i>Instructional Activities</i>{" "}
        <AdditionalInformations information="The Instructional Activities illustrate tasks and exercises teachers must prepare and conduct during the module to facilitate student learning" />{" "}
        and <i>Recommendations</i>{" "}
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
                  <DidacticGuidelineSvgModule1 />
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
                  <GuidelinesAccordeon title="Getting Familiar with Machine Learning (ML) – Sub-module 2">
                  <h1 className="mt-[40px]">Educational Objective</h1>
                    <h2 className="mt-[15px]">
                    Students will learn to produce content with generative AI tools to create design artefacts [GenAI-Obj].
                    </h2>
                    <div className=" w-full flex flex-row gap-[30px] mt-[70px]">
                      <p className=" w-1/2">
                      Students develop procedural knowledge through practical guided activities (e.g. Midjourney step-by-step tool tutorials) and they are asked 
                      </p>
                      <p className=" w-1/2">
                        to apply the acquired procedure to a familiar task (e.g. creating an original shape for a lamp inspired by nature). 
                     </p>
                    </div>
                    <h1 className="mt-[40px]">Instructional Activities</h1>
                    <div className=" flex flex-row gap-[30px] mt-[70px]">
                      <p className=" w-1/2">
                      Students are first provided with a basic literacy of AI including technical vocabulary (GenAI-Act1) and primary functionalities (GenAI-Act2). This activity is meant to promote factual and conceptual knowledge by teaching the basic elements of the discipline and their interrelationship to explain the functionality of AI tools. Once basic literacy is introduced, specific case studies are provided to contextualise the application of AI within the design practice (GenAI-Act3). At this point, the teaching moves from a theoretical to a procedural level. In this direction, students are first introduced to a guided tutorial (GenAI-Act4.3) on how to use a Generative AI tool (e.g. Midjourney) starting from setting a design goal (GenAI-Act4.1) and experimenting with relative prompts (GenAI-Act4.2). Then, to familiarise themselves with the procedure, students individually apply what they learned by refining selected prompts and generating content based on the design goal (GenAI-Act5). Lastly, moving the focus to meta-cognitive knowledge, students are asked to analyse and document the process by breaking down the steps and selecting the relevant results (GenAI-Act6). This activity aims to create awareness and knowledge of cognition. To foster participation and sharing of results, students are asked to present their work and question others (GenAI-Act7).

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
                        Download the Didactic Guidelines - Sub-module 2
                      </p>
                    </a>

                  </GuidelinesAccordeon>
                  <GuidelinesAccordeon title="Getting Familiar with Machine Learning (ML) – Sub-module 3">
                    <h1 className="mt-[40px]">Educational Objective</h1>
                    <h2 className="mt-[15px]">
                    Students will learn to apply Computer Vision (CV) algorithms to analyse and visualise data [CV-Obj]. 
                    </h2>
                    <div className=" w-full flex flex-row gap-[30px] mt-[70px]">
                      <p className=" w-1/2">
                      Students develop procedural knowledge through practical guided activities (e.g. Midjourney step-by-step tool tutorials) 
                      </p>
                      <p className=" w-1/2">
                      and they are asked to apply the acquired procedure to a familiar task (e.g. creating an infographic).
                      </p>
                    </div>
                    <h1 className="mt-[40px]">Instructional Activities</h1>
                    <div className=" flex flex-row gap-[30px] mt-[70px]">
                      <p className=" w-1/2">
                      Students are first provided with a basic literacy of CV algorithms and data visualisation (CV) techniques including technical vocabulary (CV-Act1) and primary functionalities (CV-Act2). This activity is meant to promote factual and conceptual knowledge by teaching the basic elements of the disciplines (CV and CV) and their interrelationship in analysing and visualising complex phenomena (Omena, 2021). Once basic literacy is introduced, specific case studies are provided to contextualise the application of CV within the design research (CV-Act3). At this point, the teaching moves from a theoretical to a procedural level. In this direction, students are first introduced to a guided tutorial (CV-Act4.3) on how to analyse data with CV algorithms (e.g. Meme Spector) and visualise the results (e.g. Gephi) starting from setting a research question (CV-Act4.1) and collecting and organising data related to the phenomena (CV-Act4.2). Then, to familiarise themselves with the procedure, students individually apply what they learned by investigating the dataset to answer the research question (CV-Act5). Lastly, moving the focus to meta-cognitive knowledge, students are asked to analyse and document the process by breaking down the steps and selecting the relevant results (CV-Act6). This activity aims to create awareness and knowledge of cognition. To foster participation and sharing of results, students are asked to present their work and question others (CV-Act7).
                      </p>
                      <p className=" w-1/2">
                      [CV-Act1] activities intended to provide students with vocabulary knowledge of Computer Vision
[CV-Act2] activities intended to provide students with a basic functionality of Computer Vision Algorithms and Data Visualization technniques 
[CV-Act3] activities intended to provide students with practical examples of computer vision applied to design research
[CV-Act4] activities intended to explain the procedure of analyzing data with computer vision algorithms: 
[CV-Act4.1] activities intended to introduce students in familiarising, collecting or creating data
[CV-Act4.2] activities intended to set or aligning with a research question;
[CV-Act4.3] activities intended to provide a step-by-step tool tutorial, such as Memespecotor, Gephi..
[CV-Act5] activities intended to allow students to individually analyzes data with computer vision for a research goal
[CV-Act6] activities intended to provide students with a structured template for process and results documentation;
[CV-Act7] activities intended to make students explaining and questioning the process

                      </p>
                    </div>
                    <a
                      href="/assets/data/pdf/example.pdf"
                      download="Example"
                      className="w-1/2 bg-[#8CD782] rounded-2xl mt-[50px]"
                    >
                      <p className="w-full text-[29px] p-2">
                        Download the Didactic Guidelines - Sub-module 3
                      </p>
                    </a>

                  </GuidelinesAccordeon>
                </GuidelinesAccordeon>
                <GuidelinesAccordeon title="Get in Depth– Module 2">
                  <h1 className="mt-[40px]">Educational Objective</h1>
                  <h2 className="mt-[15px]">
                    Students will learn to choose and apply AI/ML/CV tools for
                    specific activities of the design process.
                  </h2>
                  <DidacticGuidelineSvgModule2 />
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
                    <div className="flex flex-col gap-4 mt-4">
                      <Categories title="(a) Factual Knowledge " majTypes1="(a.a) Knowledge of terminology" majTypes2="(a.b) Knowledge of specific details and elements" majTypes3="" ex1="Technical vocabulary, music symbols" ex2="Major natural resources, reliable sources of informations" ex3="" />
                      <Categories title="(b) Conceptual Knowledge  " majTypes1="(b.a) Knowledge of classifications and categories" majTypes2="(b.b) Knowledge of principles and generalizations" majTypes3="(b.c) Knowledge of theories, models, and structures" ex1="Periods of geological time, forms of business ownership" ex2="Pythagorean theorem, law of supply and demand" ex3="Theory of evolution, structure of Congress" />
                      <Categories title="(c) Procedural Knowledge " majTypes1="(c.a) Knowledge of subject-specific skills and algorithms" majTypes2="(c.b) Knowledge of subject-specific techniques and methods" majTypes3="(c.c) Knowledge of criteria for determining when to use appropriate procedures" ex1="Skills used in painting with water colors, whole-number division algorithm" ex2="Interviewing techniques, scientific method" ex3="Criteria used to determine when to apply a procedure involving Newton’s second law, criteria used to judge the feasibility of using a particular method to estimate business costs" />
                      <Categories title="(d) Metacognitive Knowledge " majTypes1="(d.a) Strategic knowledge" majTypes2="(d.b) Knowledge about cognitive tasks, including appropriate contextual and conditional knowledge" majTypes3="(d.c) Self-knowledge" ex1="Knowledge of outlining as a means of capturing the structure of a unit of subject matter in a text book, knowledge of the use of heuristics" ex2="Knowledge of the types of tests particular teachers administer, knowledge of the cognitive demands of different tasks" ex3="Knowledge that critiquing essays is a personal strength, whereas writing essays is a personal weakness; awareness of one’s own knowledge level" />

                    </div>
                  </div>
                </div>
                <h2>1.2 Categories of Cognitive Processes</h2>
                <div className="flex flex-row mt-[20px] gap-[14px]">
                  <div className="flex flex-col w-1/2">
                    <p className=" text-[29px]">
                    The cognitive process dimensions comprise six major categories, each associated with specific cognitive processes, totalling 19. 
                    </p>
                    <br />
                    <br />
                    <p className=" text-[29px]">
                    These categories, arranged in increasing order of complexity, are:  
                    </p>
                    <p className=" text-[29px]">
                      (1) Remember, involves retrieving knowledge from long-term memory. Specific processes include recognizing and recalling.
                    </p>
                    <p className=" text-[29px]">
                      (2) Understand: It entails constructing meaning from instructional messages (oral, written, graphic). It encompasses interpreting, exemplifying, classifying, summarizing, inferring, comparing, and explaining.
                    </p>
                    <p className=" text-[29px]">
                      (3) Apply: About carrying out or using a procedure in a given situation. This includes executing and implementing.
                    </p>
                    <p className=" text-[29px]">
                      (4) Analyze: It involves breaking material into parts and understanding their interrelations and the overall structure or purpose. It includes differentiating, organizing and attributing.                     </p>
                    <p className=" text-[29px]">
                      (5) Evaluate: It concerns making judgments based on criteria and standards. It encompasses checking and critiquing.                     </p>
                    <p className=" text-[29px]">
                      (6) Create: It entails combining or reorganizing elements to form a novel, coherent, original or functional whole. It involves generating, planning and producing.                    </p>
                  </div>
                  <div className=" w-1/2 flex flex-col">
                    <div className="flex flex-row">
                      <p className="w-1/4 text-[16px]">
                        Process categories
                      </p>
                      <p className="w-3/4 text-[16px]">Cognitive processes and examples</p>
                    </div>
                    <div className="flex flex-col w-full gap-4 mt-4">
                      <CategoriesKnowDim title="(1) Remember" majTypes1="1.1 Recognizing" majTypes2="1.2 Recalling" majTypes3="" majTypes4='' majTypes5='' majTypes6='' majTypes7='' ex1="(e.g., Recognize the dates of important events in U.S. history)" ex2="(e.g., Recall the dates of important events in U.S. history)" ex3="" ex4="" ex5="" ex6="" ex7="" />
                      <CategoriesKnowDim title="(2) Understand" majTypes1="2.1 Interpreting" majTypes2="2.2 Exemplifying" majTypes3="2.3 Classifying" majTypes4="2.4 Summarizing" majTypes5="2.5 Inferring" majTypes6="2.6 Comparing" majTypes7="2.7 Explaining"ex1="(e.g., Paraphrase important speeches and documents)" ex2="(e.g., Give examples of various artistic painting styles)" ex3="(e.g., Classify observed or described cases of mental disorders)" ex4="(e.g., Write a short summary of the events portrayed on videotapes)" ex5="(e.g., In learning a foreign language, infer gramrnatical principles from examples)" ex6="(e.g., Compare historical events to contemporary situations)" ex7="(e.g., Explain the causes of important eighteenth-century events in France)" />
                      <CategoriesKnowDim title="(3) Apply" majTypes1="3.1 Executing" majTypes2="3.2 Implementing" majTypes3="" majTypes4='' majTypes5='' majTypes6='' majTypes7='' ex2="(e.g., Determine in which situations Newton's second law is appropriate)" ex1="(e.g., Divide one whole number by another whole number, both with multiple digits)" ex3="" ex4="" ex5="" ex6="" ex7=""/>
                      <CategoriesKnowDim title="(4) Analyze" majTypes1="4.1 Differentiating" majTypes2="4.2 Organnizing" majTypes3="4.3 Attributing" majTypes4='' majTypes5='' majTypes6='' majTypes7='' ex1="(e.g., Distinguish between relevant and irrelevant numbers in a mathematical word problem)" ex2="(e.g., Structure evidence in a historical description into evidence for and against a particular historical explanation)" ex3="(e.g., Determine the point of view of the author of an essay in terms of his or her political perspective)" ex4="" ex5="" ex6="" ex7=""/>
                      <CategoriesKnowDim title="(5) Evaluate" majTypes1="5.1 Checking" majTypes2="5.2 Critiquing" majTypes3="" majTypes4='' majTypes5='' majTypes6='' majTypes7='' ex1="Knowledge of outlining as a means of capturing the structure of a unit of subject matter in a text book, knowledge of the use of heuristics" ex2="Knowledge of the types of tests particular teachers administer, knowledge of the cognitive demands of different tasks" ex3="Knowledge that critiquing essays is a personal strength, whereas writing essays is a personal weakness; awareness of one’s own knowledge level" ex4="" ex5="" ex6="" ex7=""/>
                      <CategoriesKnowDim title="(6) Create" majTypes1="6.1 Generating" majTypes2="6.2 Planning" majTypes3="6.3 Producing" majTypes4='' majTypes5='' majTypes6='' majTypes7='' ex1="Knowledge of outlining as a means of capturing the structure of a unit of subject matter in a text book, knowledge of the use of heuristics" ex2="Knowledge of the types of tests particular teachers administer, knowledge of the cognitive demands of different tasks" ex3="Knowledge that critiquing essays is a personal strength, whereas writing essays is a personal weakness; awareness of one’s own knowledge level" ex4="" ex5="" ex6="" ex7=""/>

                    </div>
                  </div>
                </div>
                <h2>1.3 Towards Educational Objectives and Instructional Activities</h2>
                <div className="flex flex-row mt-[20px] gap-[14px]">
                  <div className="flex flex-col w-1/2">
                    <p>The cognitive processes and the knowledge dimensions are combined to define the educational objectives and the instructional activities according to the following syntax.
                    </p>
                    <div className=" flex flex-row">
                      <p>statement</p>
                      <p>+</p>
                      <p>verb</p>
                      <p>+</p>
                      <p>noun</p>

                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <p>Statement [EO] “Student will learn to..”</p>
                    <p>Statement [EO] “Activity intended to..”</p>
                    <br/>
                    <p>The verb refers to cognitive processes  (1) Remember; (2) Understand; (3) Apply; (4) Analyze; (5) Evaluate; (6) Create. </p>
                    <br/>
                    <p>Nouns refer to the knowledge dimension that students are expected to acquire or build: (a) Factual Knowledge; (b) Conceptual Knowledge; (c) Procedural Knowledge; (d) Metacognitive Knowledge. </p>

                  </div>

                  <div className="flex flex-col w-1/2">
                    <p>Example</p>
                    <br/>
                    <p>Educational Objective </p>
                    <h2>Students will learn to </h2>
                    <h2>train a Machine Learning model to </h2>
                    <h2>create design artefacts.</h2>
                    <br/>
                    <p>{'{'}AI.1{'}'} Activities intended to provide students with vocabulary knowledge of ML;</p>
                    <br/>
                    <p>{'{'}AI.2{'}'} Activities intended to provide students with a basic functionality of ML;</p>
                    <br/>
                    <p>{'{'}AI.3{'}'} Activities intended to provide students with practical examples of machine learning applied to design; </p>
                    <br/>
                    <p>{'{'}AI.4.1{'}'} Activities intended to explain the procedure of training a simplified machine learning model;</p>
                    <br/>
                    <p>{'{'}AI.4.2{'}'} Activities intended to set or align with a design goal;</p>
                    <br/>
                    <p>{'{'}AI.4.3{'}'} Activities intended to introduce students to familiarising, collecting or creating data;</p>
                    <br/>
                    <p>{'{'}AI.5{'}'} Activities intended to provide a step-by-step tool tutorial, such as RunwayML;</p>
                    <br/>
                    <p>{'{'}AI.6{'}'} Activities intended to allow students to individually train a simplified machine learning model for a design goal;</p>
                    <br/>
                    <p>{'{'}AI.7{'}'} Activities intended to provide students with a structured template for process and results documentation;</p>
                    <br/>
                  </div>
                </div>
                <h2 className="flex w-full">1.4 The framework of Bloom's taxonomy table</h2>
                <div className="flex flex-col w-full mt-4 gap-4">
                  <div className="flex flex-row">
                    <p className=" w-1/2">The Bloom Taxonomy proposes a table aimed to formalise and organise Educational Objectives and Instructional Activities according to knowledge dimensions and cognitive processes. The table helps educators identify instructional activities based on the educational goals of the teaching module. 
                    </p>
                    <p className=" w-1/2">
                      The table is presented below. The knowledge dimension categories are organised horizontally, while cognitive process dimensions are reported in columns.
                    </p>
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-row w-full gap-2">
                      <p className=" w-1/4 rounded-lg border text-[22px] p-4 border-green">The knowledge dimension</p>
                      <div className="flex flex-col w-3/4 gap-2">
                        <p className=" w-full rounded-lg border p-4 border-green">The cognitive process dimension</p>
                        <div className="flex flex-row w-full gap-2">
                          <p className=" w-1/6 rounded-lg border text-[22px] p-2 border-green">(1) Remember</p>
                          <p className=" w-1/6 rounded-lg border text-[22px] p-2 border-green">(2) Understand</p>
                          <p className=" w-1/6 rounded-lg border text-[22px] p-2 border-green">(3) Apply</p>
                          <p className=" w-1/6 rounded-lg border text-[22px] p-2 border-green">(4) Analyze</p>
                          <p className=" w-1/6 rounded-lg border text-[22px] p-2 border-green">(5) Evaluate</p>
                          <p className=" w-1/6 rounded-lg border text-[22px] p-2 border-green">(6) Create</p>
                        </div>

                      </div>
                    </div>
                    <div className="flex flex-row w-full gap-2">
                      <p className="w-1/4 rounded-lg border text-[22px] p-2 border-green">(a) Factual Knowledge</p>
                      <div className="w-3/4 flex flex-row gap-2">
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                      </div>
                    </div>
                    <div className="flex flex-row w-full gap-2">
                      <p className="w-1/4 rounded-lg border text-[22px] p-2 border-green">(b) Conceptual Knowledge</p>
                      <div className="w-3/4 flex flex-row gap-2">
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                      </div>
                    </div>
                    <div className="flex flex-row w-full gap-2">
                      <p className="w-1/4 rounded-lg border text-[22px] p-2 border-green">(c) Procedural Knowledge</p>
                      <div className="w-3/4 flex flex-row gap-2">
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                      </div>
                    </div>
                    <div className="flex flex-row w-full gap-2">
                      <p className="w-1/4 rounded-lg border text-[22px] p-2 border-green">(d) Meta Knowledge</p>
                      <div className="w-3/4 flex flex-row gap-2">
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                        <p className=" w-1/6 h-full rounded-lg border text-[22px] p-2 border-green"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ),
          },
        ]}
      />
      <p className="mt-10">Didactic Resources</p>
      <DidacticGuidelineResources
        title="Co-designing with AI"
        subtitle="16 Jul 2023, SUPSI, Mendrisio"
        type="Event"
        link="/assets/data/pdf/example.pdf"
      />
      <DidacticGuidelineResources
        title="Co-designing with AI"
        subtitle="16 Jul 2023, SUPSI, Mendrisio"
        type="Event"
        link="/assets/data/pdf/example.pdf"
      />
      <DidacticGuidelineResources
        title="Co-designing with AI"
        subtitle="16 Jul 2023, SUPSI, Mendrisio"
        type="Event"
        link="/assets/data/pdf/example.pdf"
      />
      <DidacticGuidelineResources
        title="Co-designing with AI"
        subtitle="16 Jul 2023, SUPSI, Mendrisio"
        type="Event"
        link="/assets/data/pdf/example.pdf"
      />
      <DidacticGuidelineResources
        title="Digital Plot"
        type="Resources"
        link="/assets/data/pdf/example.pdf"
      />
      <DidacticGuidelineResources
        title="Digital Plot"
        type="Resources"
        link="/assets/data/pdf/example.pdf"
      />
      <DidacticGuidelineResources
        title="Digital Plot"
        type="Resources"
        link="/assets/data/pdf/example.pdf"
      />
      <DidacticGuidelineResources
        title="Digital Plot"
        type="Resources"
        link="/assets/data/pdf/example.pdf"
      />

      <p className="text-[12px] md:text-[15px] mt-10">
        © 2022. This project is licensed under CC BY 4.0. Supported by Movetia.
        Exchange and mobility.
      </p>
    </Layout>
  );
};

export default DidacticGuidelines;
