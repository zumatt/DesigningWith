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
      <div className="flex flex-row">
        <div>
          <p>
            © 2022. This project is licensed under CC BY 4.0. Supported by
            Movetia. Exchange and mobility. <br />
            <br />
            The project was founded in September 2022 and ended in February 2024. It
            was financially supported by Movetia. Movetia promotes exchange,
            mobility and cooperation within the fields of education, training and
            youth work – in Switzerland, Europe and worldwide.{" "}
            <a
              className="underline inline"
              rel="noreferrer"
              target="_blank"
              href="https://www.movetia.ch"
            >
              www.movetia.ch
            </a>
            <br /> The aim of the project is to develop an experimental approach and
            collaborate on the definition of a new educational module suitable to be
            applied in multidisciplinary environments that integrate Artificial
            Intelligence (AI), Machine Learning (ML) and Data Visualization (DV) in
            Design curricula.
            <br /></p>
          </div>
          <div>
            <p> This website collects and releases the generated knowledge and
            pedagogical guidelines in open access to the design community, for
            autonomous implementation of teaching activities on AI in design
            curricula.
            </p>
            <br/>
            <br/>
            <p className="underline">Cite this project:</p>
            <p> Botta, M., Autuori, A., Subet, M., Terenghi, G., (2024).<i> Designing With: A New Educational Module to Integrate Artificial Intelligence, Machine Learning and Data Visualization in Design Curricula.</i> <a href="designingwithai.ch" rel="noopener" target="_blank" className="underline">designingwithai.ch </a> 
            </p>

          </div>
        
      </div>
      <div className="flex flex-col md:flex-row my-[100px]">
        <div className="flex-1 md:w-1/3">
          <p className="text-[12px] md:text-[15px] ">
            Project Coordination
            <br />
            <u>
              <a href="https://www.supsi.ch/" className="inline">
                SUPSI
              </a>
            </u>{" "}
            - University of Applied Sciences and Arts of Southern
            <br />
            Switzerland
            <br />
            Project Partners
            <br />
            <u>
              <a href="https://www.unl.pt/" className="inline">
                NOVA
              </a>
            </u>{" "}
            - Universidade NOVA de Lisboa
            <br />
            <u>
              <a href="https://www.epfl.ch/" className="inline">
                EPFL
              </a>
            </u>{" "}
            - École polytechnique fédérale de Lausanne
            <br />
            <br />
          </p>
        </div>
        <div className="flex-1 md:w-1/3">
          <p className=" text-[12px] md:text-[15px] ">
            <u>
              <a
                href="https://www.linkedin.com/in/massimo-botta"
                className="inline"
              >
                Massimo Botta
              </a>
            </u>{" "}
            - SUPSI, Project Coordinator
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/antonella-autuori/"
                className="inline"
              >
                Antonella Autuori
              </a>
            </u>{" "}
            - SUPSI, Research & Teaching Assistant
            <br />
            <u>
              <a href="https://www.linkedin.com/in/zumat/" className="inline">
                Matteo Subet
              </a>
            </u>{" "}
            - SUPSI, Research & Teaching Assistant
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/ginevra-terenghi-b530b21ab/"
                className="inline"
              >
                Ginevra Terenghi
              </a>
            </u>{" "}
            - SUPSI, PhD Student
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/desir%C3%A9e-veschetti-098009b3/"
                className="inline"
              >
                Desirée Veschetti
              </a>
            </u>{" "}
            - SUPSI, Research & Teaching Assistant
            <br />
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/jannajoceliomena/"
                className="inline"
              >
                Janna Joceli Omena
              </a>
            </u>{" "}
            - NOVA, Researcher and Teacher
            <br />
            <u>
              <a
                href="https://www.linkedin.com/in/eduardo-leite-3a3237232/"
                className="inline"
              >
                Eduardo Leite
              </a>
            </u>{" "}
            - NOVA, PhD Candidate and Teacher
            <br />
            <br />
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
        <div className="flex md:w-1/3 ">
          <a href="https://www.movetia.ch/">
            <img
              src={movetiaLogo}
              alt="Movetia Logo"
              className=" md:pl-10 w-[303px] h-10 left"
            />
          </a>
        </div>
      </div>
      <p className="text-[12px] md:text-[15px] mt-12 md:mt-0">
        © 2022. This project is licensed under CC BY 4.0. Supported by Movetia.
        Exchange and mobility.
      </p>
    </Layout>
  );
};

export default About;
