import Layout from "../components/Layout";
import AdditionalInformations from "../components/AdditionalInformations";
import TabDisplay from "../components/TabsDisplay";
import CapabilitiesTab from "../components/AIForDesignersTabs/CapabilitiesTab";
import DataTypesTab from "../components/AIForDesignersTabs/DataTypesTab";
import DesignProcessTab from "../components/AIForDesignersTabs/DesignProcessTab";
import AIToolTab from "../components/AIForDesignersTabs/AIToolTab";

const AIForDesigners = () => {
  return (
    <Layout>
      <h1 className="mt-[33px]">AI For Designers</h1>
      <h2 className="mt-[10px]">
        To incorporate artificial intelligence{" "}
        <AdditionalInformations information="In this work, we refer to Artificial Intelligence (AI), considering Machine Learning (ML) and Computer Vision (CV) as a subdomain of AI (Schuh et al., 2019)" />{" "}
        into design education, we introduce a design-oriented framework that
        combines taxonomies from various domains to create knowledge addressing
        both, design students and teachers.{" "}
      </h2>
      <p className="mt-[50px]">
        The framework structures the following components:
      </p>
      <TabDisplay
        tabs={[
          CapabilitiesTab,
          DataTypesTab,
          DesignProcessTab,
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

export default AIForDesigners;
