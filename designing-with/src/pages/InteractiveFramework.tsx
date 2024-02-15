import React from "react";
import Layout from "../components/Layout";
import Filter from "../components/Filter";
import IcicleDiagram from "../components/IcicleDiagram";

const InteractiveFramework = () => {
  return (
    <Layout>
      <a className="mt-[33px] underline cursor-pointer text-xl">
        Recommend a tool
      </a>
      <div className="flex flex-row justify-end gap-2">
        <Filter name="Premium" color="border-blue" />
        <Filter name="Freemium" color="border-purple" />
        <Filter name="Free" color="border-beige" />
        <Filter name="Free-Waiting List" color="border-orange" />
      </div>
      <button className="flex w-24">Filter by(+)</button>
      <div className="flex flex-row">
        <IcicleDiagram />
      </div>
    </Layout>
  );
};

export default InteractiveFramework;
