import React from "react";
import Layout from "../components/Layout";
import GuidelinesAccordeon from "../components/GuidelinesAccordeon";
import AdditionalInformations from "../components/AdditionalInformations";

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
      <div className="h-[800px] bg-grey w-full mt-[20px] flex justify-center items-center rounded-xl">
        SVG Graph goes here
      </div>
    </Layout>
  );
};

export default AIForDesigners;
