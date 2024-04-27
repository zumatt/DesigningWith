import Layout from "../components/Layout";
import AdditionalInformations from "../components/AdditionalInformations";
import TabDisplay from "../components/TabsDisplay";
import CapabilitiesTab from "../components/AIForDesignersTabs/CapabilitiesTab";
import DataTypesTab from "../components/AIForDesignersTabs/DataTypesTab";
import DesignProcessTab from "../components/AIForDesignersTabs/DesignProcessTab";
import AIToolTab from "../components/AIForDesignersTabs/AIToolTab";
import { useState } from "react";
import { useEffect } from "react";

const AIForDesigners = () => {
  const isMobile = useCheckMobileScreen();
  return (
    <Layout>
      <h1 className="mt-[33px]">AI For Designers</h1>
      <h2 className="mt-[10px]">
        To incorporate artificial intelligence{" "}
        <AdditionalInformations small={isMobile} information="In this work, we refer to Artificial Intelligence (AI), considering Machine Learning (ML) and Computer Vision (CV) as a subdomain of AI (Schuh et al., 2019)" />{" "}
        into design education, we introduce a design-oriented framework that
        combines taxonomies from various domains to create knowledge addressing
        both, design students and teachers.{" "}
      </h2>
      <p className="mt-[50px]">
        The framework structures the following components:
      </p>
      <TabDisplay
        tabs={[
          DesignProcessTab,
          CapabilitiesTab,
          DataTypesTab,
          AIToolTab,
        ]}
      />
      <p className="text-[12px] md:text-[15px] mt-12 md:mt-[100px]">
        © 2022. This project is licensed under CC BY 4.0. Supported by Movetia.
        Exchange and mobility.
      </p>
    </Layout>
  );
};

const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width < height;
};

export default AIForDesigners;
