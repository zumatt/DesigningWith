import React from "react";
import Layout from "../components/Layout";
import GuidelinesAccordeon from "../components/GuidelinesAccordeon";
import AdditionalInformations from "../components/AdditionalInformations";

const DidacticGuidelines = () => {
  return (
    <Layout>
      <h1 className="mt-[33px]">AI For Designers</h1>
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
      <div className="h-[800px] bg-grey w-full mt-[20px] flex justify-center items-center rounded-xl">
        SVG Graph goes here
      </div>
      <GuidelinesAccordeon title="Getting Familiar with - Module 1">
        <h1 className="mt-[40px]">Overall Objective</h1>
        <h2 className="mt-[15px]">
          Combining the three sub-modules (ML, GenAI, CV) students will learn to
          employ AI to train, generate, analyze and visualize data for specific
          design purposes.
        </h2>
        <div className="flex flex-row gap-[30px] mt-[70px]">
          <p>
            To promote the development of <i>personal skills</i>, students are
            suggested to <i>work individually</i>. Teachers can arrange the
            duration of each activity based on the level of in-depth study
            required {"["}
            example{"]"}. Sub-modules are not strictly related to each other.
          </p>
          <p>
            The application of all of them is not mandatory, teachers can make a
            selection based on needs and interests. The structure of the
            sub-modules is not designed based on the tool mentioned in the
            guideline. For a more complete list of tools, refer to the Designing
            With framework {"["}link{"]"}.
          </p>
        </div>
      </GuidelinesAccordeon>
      <GuidelinesAccordeon title="Get in Depth– Module 2">
        <h1>Overall Objective</h1>
        <p>
          This module provides an overview of the AI capabilities and the
          different types of data that are handled by AI systems. It also
          introduces the basic concepts of machine learning and data
          visualization.
        </p>
      </GuidelinesAccordeon>
    </Layout>
  );
};

export default DidacticGuidelines;
