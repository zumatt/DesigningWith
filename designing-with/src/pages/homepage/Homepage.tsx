import styles from "./styles.module.css";

const Homepage = () => {
  return (
    <div className={`${styles.wrapper} p-[10px] h-full`}>
      <div
        className={`${styles.box} ${styles.innerGlowMain} ${styles.innerGlowWhite}`}
        id={styles["box-1"]}
      >
        <h1 className={styles.titleHome}>Designing With AI</h1>
        <h2 className= {styles.subtitleHome}>
          A New Educational Module to Integrate Artificial Intelligence, Machine
          Learning and Data Visualization in Design Curricula
        </h2>
      </div>
      <a href="/about">
        <div
          className={`${styles.box} ${styles.innerGlowMain} ${styles.innerGlowAnimated} ${styles.innerGlowViolet}`}
          id={styles["box-2"]}
        >
          <h3 className={styles.pagesInfo}>
            <span className={styles.pagesTitle}>About</span>
            <span className={`${styles.pagesDescription} ${styles.hidden}`}>
              Who are we? Why do we do it? What is our goal? Find out more about
              the project.
            </span>
          </h3>
        </div>
      </a>
      <a href="/ai-for-designers">
        <div
          className={`${styles.box} ${styles.innerGlowMain} ${styles.innerGlowAnimated} ${styles.innerGlowLightBlue}`}
          id={styles["box-3"]}
        >
          <h3 className={styles.pagesInfo}>
            <span className={styles.pagesTitle}>AI for Designers</span>
            <span className={`${styles.pagesDescription} ${styles.hidden}`}>
              Let's start with the knowledge base: What data are handled by AI
              systems? What are the AI capabilities? How can they be integrated
              into a design process?{" "}
            </span>
          </h3>
        </div>
      </a>
      <a href="/interactive-framework">
        <div
          className={`${styles.box} ${styles.innerGlowMain} ${styles.innerGlowAnimated} ${styles.innerGlowDarkGrey}`}
          id={styles["box-4"]}
        >
          <h3 className={styles.pagesInfo}>
            <span className={styles.pagesTitle}>Interactive Framework</span>
            <span className={`${styles.pagesDescription} ${styles.hidden}`}>
              Let's put it into practice: Which AI tool to choose? Use our tool
              to gain an overview of the available tools to solve your design
              task!
            </span>
          </h3>
        </div>
      </a>
      <a href="/didactic-guidelines">
        <div
          className={`${styles.box} ${styles.innerGlowMain} ${styles.innerGlowAnimated} ${styles.innerGlowGreen}`}
          id={styles["box-5"]}
        >
          <h3 className={styles.pagesInfo}>
            <span className={styles.pagesTitle}>Didactic Guidelines</span>
            <span className={`${styles.pagesDescription} ${styles.hidden}`}>
              Let's move up a level: Do you want to introduce Artificial
              Intelligence, Machine Learning and Data Visualisation into a
              design program? Discover our teaching guidelines and customize
              your course.
            </span>
          </h3>
        </div>
      </a>
      <a href="/resources">
        <div
          className={`${styles.box} ${styles.innerGlowMain} ${styles.innerGlowAnimated} ${styles.innerGlowYellow}`}
          id={styles["box-6"]}
        >
          <h3 className={styles.pagesInfo}>
            <span className={styles.pagesTitle}>Resources</span>
            <span className={`${styles.pagesDescription} ${styles.hidden}`}>
              Let's get inspired: do you want to know more? Do you need
              inspiration for your next project? Explore our collection of case
              studies, repositories and articles.
            </span>
          </h3>
        </div>
      </a>
      <a href="mailto:designingwithai@supsi.ch?subject=Let’s talk! - Designing With AI Website">
        <div
          className={`${styles.box} ${styles.innerGlowMain} ${styles.innerGlowAnimated} ${styles.innerGlowRed}`}
          id={styles["box-7"]}
        >
          <h3 className={styles.pagesInfo}>
            <span className={styles.pagesTitle}>Let’s talk!</span>
            <span className={`${styles.pagesDescription} ${styles.hidden}`}>
              Let's get in touch: Are you a lecturer? A researcher? Are you
              experimenting or researching in this field? Contact us to exchange
              experiences and create new ones!
            </span>
          </h3>
        </div>
      </a>
    </div>
  );
};

export default Homepage;
