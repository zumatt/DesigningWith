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
        Curricula, is a research project that aims to develop and define a
        new educational module suitable for multidisciplinary environments
        to integrate Artificial Intelligence (AI), Machine Learning (ML),
        and Computer Vision (CV) into Design curricula.
      </h2>
      <br />
      <div className="flex flex-col gap-4 md:flex-row w-full">
        <div className=" w-full md:w-1/2">
          <p>
          This website collects and releases the generated knowledge and pedagogical guidelines of the research in open access to the design community, for autonomous implementation of teaching activities on AI.{" "}
            
            <br />
            The project is developed by the Institute of Design of the University
            of Applied Sciences and Arts of Southern Switzerland (SUPSI),
            the Media x Design Lab of the École Polytechnique fédérale de Lausanne  (EPFL),
            and the Universidade NOVA de Lisboa.
            <br />
          </p>
        </div>
        <div className=" w-full md:w-1/2">
          <p>
            {" "}
            The research project was financially supported by the International Program of Movetia,
            from September 2022 to February 2024. 
            Movetia promotes exchange, mobility and cooperation within the fields of education,
            training and youth work – in Switzerland, Europe and worldwide.{" "}
            <a
              className="underline inline"
              rel="noreferrer"
              target="_blank"
              href="https://www.movetia.ch"
            >
              www.movetia.ch.
            </a>
          </p>
          <br />
          <br />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row w-full">
        <div className=" w-full">
          <br />
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
              designingwithai.ch{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-12 md:my-[100px]">
        <div className="flex-1 md:w-1/4">
          <p className="text-[12px] md:text-[15px]">
            <span>Project Coordination</span>
            <br />
            <br />
            <u>
              <a
                href="https://www.supsi.ch/"
                target="_blank"
                className="inline"
              >
                SUPSI
              </a>
            </u>{" "}
            - University of Applied Sciences and Arts of Southern Switzerland 
            <br />
            <br />
            <p className="flex md:hidden text-[12px]">People Involved</p>
            <u>
              <a
                href="https://www.linkedin.com/in/massimo-botta"
                target="_blank"
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
                target="_blank"
                className="inline"
              >
                Antonella Autuori
              </a>
            </u>{" "}
            - Researcher
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/zumat/"
                target="_blank"
                className="inline"
              >
                Matteo Subet
              </a>
            </u>{" "}
            - Researcher
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/ginevra-terenghi-b530b21ab/"
                target="_blank"
                className="inline"
              >
                Ginevra Terenghi
              </a>
            </u>{" "}
            - Researcher
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/desir%C3%A9e-veschetti-098009b3/"
                target="_blank"
                className="inline"
              >
                Desirée Veschetti
              </a>
            </u>{" "}
            - Website Designer
          </p>
        </div>
        <div className="flex-1 md:w-1/4">
          <p className="text-[12px] md:text-[15px] ">
            <span>Project Partners</span>
            <br />
            <br />
            <u>
              <a
                href="https://www.unl.pt/"
                target="_blank"
                className="inline"
              >
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
                target="_blank"
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
                target="_blank"
                className="inline"
              >
                Eduardo Leite
              </a>
            </u>{" "}
            - Researcher and Teacher
            <br />
            <br />
          </p>
        </div>
        <div className="flex-1 md:w-1/4">
          <p className=" text-[12px] md:text-[15px] ">
            <br />
            <br />
            <p className="flex md:hidden text-[12px]">Project Partner</p>
            <u>
              <a
                href="https://www.epfl.ch/"
                target="_blank"
                className="inline"
              >
                EPFL
              </a>
            </u>{" "}
            - École Polytechnique Fédérale de Lausanne
            <br />
            <br />
            <br />
            <p className="flex md:hidden text-[12px]">People Involved</p>
            <u>
              <a
                href="https://www.linkedin.com/in/huangjef/"
                target="_blank"
                className="inline"
              >
                Jeffrey Huang
              </a>
            </u>{" "}
            - Researcher
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/frederick-kim-b2972922/"
                target="_blank"
                className="inline"
              >
                Kim Frederick Chando
              </a>
            </u>{" "}
            - Researcher and Teacher
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/mikhael-johanes-8b55051a1/"
                target="_blank"
                className="inline"
              >
                Mikhael Johanes
              </a>
            </u>{" "}
            - Researcher
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/ugo-balducci/"
                target="_blank"
                className="inline"
              >
                Ugo Jean Mario Balducci
              </a>
            </u>{" "}
            – Web Developer
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/gregory-malyk-54714a253/"
                target="_blank"
                className="inline"
              >
                Gregory Malyk
              </a>
            </u>{" "}
            – Web Developer
            <br />
            <br />
          </p>
        </div>
        <div className="flex md:w-1/4 ">
          <a
            href="https://www.movetia.ch/"
            target="_blank"
          >
            <img
              src={movetiaLogo}
              alt="Movetia Logo"
              className=" md:pl-10 w-[303px] h-10 left"
            />
          </a>
        </div>
      </div>
      <p className="text-[12px] md:text-[15px] mt-12">
        © 2024. This project is licensed under CC BY 4.0. Supported by Movetia.
        Exchange and mobility.
      </p>
    </Layout>
  );
};

export default About;
