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
      <div className="flex flex-col gap-4 md:flex-row w-full">
        <div className=" w-full md:w-1/2">
          <p>
            The project was founded in September 2022 and ended in February
            2024. It was financially supported by Movetia. Movetia promotes
            exchange, mobility and cooperation within the fields of education,
            training and youth work – in Switzerland, Europe and worldwide.{" "}
            <a
              className="underline inline"
              rel="noreferrer"
              target="_blank"
              href="https://www.movetia.ch"
            >
              www.movetia.ch.
            </a>
            <br /> The aim of the project is to develop an experimental approach
            and collaborate on the definition of a new educational module
            suitable to be applied in multidisciplinary environments that
            integrate Artificial Intelligence (AI), Machine Learning (ML) and
            Data Visualization (DV) in Design curricula.
            <br />
          </p>
        </div>
        <div className=" w-full md:w-1/2">
          <p>
            {" "}
            This website collects and releases the generated knowledge and
            pedagogical guidelines in open access to the design community, for
            autonomous implementation of teaching activities on AI in design
            curricula.
          </p>
          <br />
          <br />
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                "Botta, M., Autuori, A., Subet, M., Terenghi, G., (2024). Designing With: A New Educational Module to Integrate Artificial Intelligence, Machine Learning, and Data Visualization in Design Curricula. designingwithai.ch"
              );
              alert("Reference has been copied to the clipboard!");
            }}
            className=" text-[17px] md:text-[24px] underline"
          >
            Cite this project:
          </button>
          <p>
            {" "}
            Botta, M., Autuori, A., Subet, M., Terenghi, G., (2024).
            <i>
              {" "}
              Designing With: A New Educational Module to Integrate Artificial
              Intelligence, Machine Learning and Data Visualization in Design
              Curricula.
            </i>{" "}
            <p
              className="underline"
            >
              designingwithai.ch{" "}
            </p>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-12 md:my-[100px]">
        <div className="flex-1 md:w-1/4">
          <p className="text-[12px] md:text-[15px] ">
            Project Coordination
            <br />
            <u>
              <a href="https://www.supsi.ch/" className="inline">
                SUPSI
              </a>
            </u>
            - University of Applied Sciences and Arts of Southern Switzerland 
            <br />
            <br />
            <p className="flex md:hidden text-[12px]">People Involved</p>
            <u>
              <a
                href="https://www.linkedin.com/in/massimo-botta"
                className="inline"
              >
                Massimo Botta
              </a>
            </u>{" "}
            - Project Coordinator
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/antonella-autuori/"
                className="inline"
              >
                Antonella Autuori
              </a>
            </u>{" "}
            - Research & Teaching Assistant
            <br />
            <u>
              <a href="https://www.linkedin.com/in/zumat/" className="inline">
                Matteo Subet
              </a>
            </u>{" "}
            - Research & Teaching Assistant
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/ginevra-terenghi-b530b21ab/"
                className="inline"
              >
                Ginevra Terenghi
              </a>
            </u>{" "}
            - PhD Student
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/desir%C3%A9e-veschetti-098009b3/"
                className="inline"
              >
                Desirée Veschetti
              </a>
            </u>{" "}
            - Research & Teaching Assistant
          </p>
        </div>
        <div className="flex-1 md:w-1/4">
          <p className="text-[12px] md:text-[15px] ">
            Project Partners
            <br />
            <u>
              <a href="https://www.unl.pt/" className="inline">
                NOVA
              </a>
            </u>{" "}
            - Universidade NOVA de Lisboa
            <br />
            <br />
            <br />
            <p className="flex md:hidden text-[12px]">People Involved</p>
            <u>
              <a
                href="https://www.linkedin.com/in/jannajoceliomena/"
                className="inline"
              >
                Janna Joceli Omena
              </a>
            </u>{" "}
            - Researcher and Teacher
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/eduardo-leite-3a3237232/"
                className="inline"
              >
                Eduardo Leite
              </a>
            </u>{" "}
            - PhD Candidate and Teacher
            <br />
            <br />
          </p>
        </div>
        <div className="flex-1 md:w-1/4">
          <p className=" text-[12px] md:text-[15px] ">
            <br />
            <p className="flex md:hidden text-[12px]">Project Partner</p>
            <u>
              <a href="https://www.epfl.ch/" className="inline">
                EPFL
              </a>
            </u>{" "}
            - École Polytechnique Fédérale de Lausanne
            <br />
            <br />
            <br />
            <br />
            <p className="flex md:hidden text-[12px]">People Involved</p>
            <u>
              <a
                href="https://www.linkedin.com/in/huangjef/"
                className="inline"
              >
                Jeffrey Huang
              </a>
            </u>{" "}
            - EPFL, Full Professor, Media x Design Lab
            <br />
            <u>
              <a
                href="https://people.epfl.ch/frederick.kim?lang=en"
                className="inline"
              >
                Kim Frederick Chando
              </a>
            </u>{" "}
            - EPFL, PhD Candidate and Teacher, Media x Design Lab
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/mikhael-johanes-8b55051a1/"
                className="inline"
              >
                Mikhael Johanes
              </a>
            </u>{" "}
            - EPFL, Media x Design Lab
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/ugo-balducci/"
                className="inline"
              >
                Ugo Jean Mario Balducci
              </a>
            </u>{" "}
            – EPFL, Student Assistant
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/gregory-malyk-54714a253/"
                className="inline"
              >
                Gregory Malyk
              </a>
            </u>{" "}
            – EPFL, Student Assistant
            <br />
            <br />
          </p>
        </div>
        <div className="flex md:w-1/4 ">
          <a href="https://www.movetia.ch/">
            <img
              src={movetiaLogo}
              alt="Movetia Logo"
              className=" md:pl-10 w-[303px] h-10 left"
            />
          </a>
        </div>
      </div>
      <p className="text-[12px] md:text-[15px] mt-12">
        © 2022. This project is licensed under CC BY 4.0. Supported by Movetia.
        Exchange and mobility.
      </p>
    </Layout>
  );
};

export default About;
