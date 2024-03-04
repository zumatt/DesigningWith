import React from "react";
import Layout from "../components/Layout";
import movetiaLogo from "../assets/images/movetia-logo.png";

const About = () => {
  return (
    <Layout>
      <h1 className="mt-[33px]">About</h1>
      <h2 className="mt-[10px]">
        Designing With: A New Educational Module to Integrate Artificial
        Intelligence, Machine Learning and Data Visualization in Design
        Curricula, is a research project in collaboration between the Institute
        of Design, SUPSI; the EPFL and the Universidade NOVA de Lisboa.
      </h2>
      <br />
      <p>
        © 2022. This project is licensed under CC BY 4.0. Supported by Movetia.{" "}
        <br />
        <br />
        The project was founded in September 2022 and ended in February 2024. It
        was financially supported by Movetia. Movetia promotes exchange,
        mobility and cooperation within the fields of education, training and
        youth work – in Switzerland, Europe and worldwide. {' '}
        <a className=" underline" rel="noreferrer" target='_blank' href="https://www.movetia.ch">www.movetia.ch</a>
        <br /> The aim of the project is to develop an experimental approach and
        collaborate on the definition of a new educational module suitable to be
        applied in multidisciplinary environments that integrate Artificial
        Intelligence (AI), Machine Learning (ML) and Data Visualization (DV) in
        Design curricula.
        <br />
        <br /> This website collects and releases the generated knowledge and
        pedagogical guidelines in open access to the design community, for
        autonomous implementation of teaching activities on AI in design
        curricula.
      </p>

      {/* <div className="grid grid-cols-4 grid-rows-2 gap-[10px] ml-[200px] mt-[100px]">
        <p className="captionFont">
          Antonella Autuori - SUPSI, Research & Teaching Assistant Creative
          director.
          <br /> Education Scuola Politecnica di Design, Milano. Co-founder of
          CCRZ in 2007.
        </p>
        <p className="captionFont">
          Ginevra Terenghi - SUPSI, PhD Student Creative director. Education
          Scuola Politecnica di Design, Milano. Co-founder of CCRZ in 2007.
        </p>
        <p className="captionFont">
          Matteo Subet - SUPSI, Research & Teaching Assistant Creative director.
          Education Scuola Politecnica di Design, Milano. Co-founder of CCRZ in
          2007
        </p>
        <p className="captionFont">
          Massimo Botta - SUPSI, Project Coordinator Creative director.
          Education Scuola Politecnica di Design, Milano. Co-founder of CCRZ in
          2007.
        </p>
        <p className="captionFont">
          Ginevra Terenghi - SUPSI, PhD Student Creative director. Education
          Scuola Politecnica di Design, Milano. Co-founder of CCRZ in 2007.
        </p>
        <p className="captionFont">
          Ginevra Terenghi - SUPSI, PhD Student Creative director. Education
          Scuola Politecnica di Design, Milano. Co-founder of CCRZ in 2007.
        </p>
        <p className="captionFont">
          Ginevra Terenghi - SUPSI, PhD Student Creative director. Education
          Scuola Politecnica di Design, Milano. Co-founder of CCRZ in 2007.
        </p>
        <p className="captionFont">
          Ginevra Terenghi - SUPSI, PhD Student Creative director. Education
          Scuola Politecnica di Design, Milano. Co-founder of CCRZ in 2007.
        </p>
      </div> */}

      <div className="flex flex-col md:flex-row my-[100px]">
        <div className="flex-1 md:w-1/3">
          <p className="text-[12px] md:text-[15px] ">
            Project Coordination
            <br />
            <u>SUPSI</u> - University of Applied Sciences and Arts of Southern
            <br />
            Switzerland
            
            <br />
            Project Partners
            <br />
            <u>NOVA</u> - Universidade NOVA de Lisboa
            <br />
            <u>EPFL</u> - École polytechnique fédérale de Lausanne
            <br />
            <br />
          </p>
          
        </div>
        <div className="flex-1 md:w-1/3">
          <p className=" text-[12px] md:text-[15px] ">
            <u>Massimo Botta</u> - SUPSI, Project Coordinator
            <br />
            <u>Antonella Autuori</u> - SUPSI, Research & Teaching Assistant
            <br />
            <u>Matteo Subet</u> - SUPSI, Research & Teaching Assistant
            <br />
            <u>Ginevra Terenghi</u> - SUPSI, PhD Student
            <br />
            <u>Desirée Veschetti</u> - SUPSI, Research & Teaching Assistant
            <br />
            <br />
            <u>Janna Joceli Omena</u> - NOVA, Researcher and Teacher
            <br />
            <u>Eduardo Leite</u> - NOVA, PhD Candidate and Teacher
            <br />
            <br />
            <u>Kim Frederick Chando</u> - EPFL, PhD Candidate and Teacher, Media x<br />
            Design Lab
            <br />
            <u>Mikhael Johanes</u> - EPFL, Media x Design Lab
            <br />
            <br />
            
          </p>
        </div>
        <div className="flex md:w-1/3 ">
          <img src={movetiaLogo} alt="Movetia Logo" className=" md:pl-10 w-[303px] h-10 left" />
        </div>
        {/* <div className="flex-1">
          <p className="text-[15px]">
            Project Coordination
            <br />
            SUPSI - University of Applied Sciences and Arts of Southern
            Switzerland
            <br />
            <br />
            Project Partners
            <br />
            NOVA - Universidade NOVA de Lisboa
            <br />
            EPFL - École polytechnique fédérale de Lausanne
            <br />
            <br />
            Massimo Botta - SUPSI, Project Coordinator
            <br />
            Antonella Autuori - SUPSI, Research & Teaching Assistant
            <br />
            Matteo Subet - SUPSI, Research & Teaching Assistant
            <br />
            Ginevra Terenghi - SUPSI, PhD Student
            <br />
            Matteo Loglio - SUPSI, Teacher
            <br />
            Leonardo Angelucci - SUPSI, Teacher
            <br />
            Serena Cangiano - SUPSI, Teacher
            <br />
            Desirée Veschetti - SUPSI, Research & Teaching Assistant
            <br />
            <br />
            Kim Frederick Chando - EPFL, PhD Candidate and Teacher, Media x
            Design Lab
            <br />
            Mikhael Johanes - EPFL, Media x Design Lab
            <br />
            <br />
            Janna Joceli Omena - NOVA, Researcher and Teacher
            <br />
            Eduardo Leite - NOVA, PhD Candidate and Teacher
          </p>
        </div> */}
      </div>
      <p className="text-[12px] md:text-[15px] mt-12 md:mt-0">© 2022. This project is licensed under CC BY 4.0. Supported by Movetia. Exchange and mobility.</p>
    </Layout>
  );
};

export default About;
