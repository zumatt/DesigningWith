import React, { ReactNode, useEffect } from "react";
import Layout from "../components/Layout";
import Filter from "../components/IcicleDiagram/Filter";
import { useState } from "react";
import IcicleDiagram from "../components/IcicleDiagram/IcicleDiagram";
import { FilterArg } from "../components/IcicleDiagram/FilterUtils";
import { Results } from "../components/IcicleDiagram/Filters";
import RenderToolCards from "../components/IcicleDiagram/ToolCard";
import IcicleData from "../components/IcicleDiagram/IcicleData";
import MobileIcicleDiagram from "../components/IcicleDiagram/MobileIcycleDiagram";

/**
 * Component that renders the Interactive Framework page
 * @returns The Interactive Framework page depending on the screen size
 */
const InteractiveFramework = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth / window.innerHeight < 1
  );

  const updateScreenRatio = () => {
    setIsMobile(window.innerWidth / window.innerHeight < 1);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenRatio);
    return () => window.removeEventListener("resize", updateScreenRatio);
  }, []);

  return isMobile ? (
    <InteractiveFrameworkMobile />
  ) : (
    <InteractiveFrameworkDesktop />
  );
};

/**
 * Component that renders the Interactive Framework page for desktop
 * @returns The Interactive Framework page for desktop
 */
const InteractiveFrameworkDesktop = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(!showResults);
  const [filters, setFilters] = useState<FilterArg[]>([]);
  const [activeCard, setActiveCard] = useState<ReactNode>(null);

  const showCard = (card: IcicleData | null, leftConstraint = -1) => {
    if (card) {
      setActiveCard(
        <RenderToolCards
          stage={card}
          showCard={showCard}
          leftConstraint={leftConstraint}
        />
      );
    } else {
      setActiveCard(null);
    }
  };

  const changeFilter = (name: string, depth: number, active: boolean) => {
    setFilters((prev) => {
      const index = prev.findIndex((filter) => filter.depth === depth);
      if (index === -1) {
        return [...prev, { depth: depth, values: [name] }];
      } else if (prev[index].values.includes(name) && !active) {
        const newVals = prev[index].values.filter((value) => value !== name);

        if (newVals.length === 0) {
          return prev.filter((filter) => filter.depth !== depth);
        }

        return [
          ...prev.filter((filter) => filter.depth !== depth),
          {
            depth: depth,
            values: newVals,
          },
        ];
      } else {
        return [{ depth: depth, values: [...prev[index].values, name] }];
      }
    });
  };

  return (
    <Layout>
      {/* <a
        className="mt-[33px] underline cursor-pointer text-xl"
        href="mailto:designingwithai@supsi.ch?subject=Recommend a Tool - Designing With AI Website"
      >
        Recommend a tool
      </a> */}
      <div className="md:flex flex-row justify-end gap-2 hidden">
        <Filter name="Premium" color="border-blue" />
        <Filter name="Freemium" color="border-purple" />
        <Filter name="Free" color="border-beige" />
        <Filter name="Free-Waiting List" color="border-orange" />
      </div>
      <div
        className={` md:flex w-full rounded my-2 bg-opacity-45 hidden flex-row justify-between  ${
          showResults ? "bg-gray-200" : ""
        } `}
      >
        <button onClick={onClick}>Filter by ({showResults ? "-" : "+"})</button>
        <div className="flex flex-row gap-2 overflow-hidden">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() =>
                changeFilter(filter.values[0], filter.depth, false)
              }
              className="bg-black text-white rounded-xl px-2"
            >
              {filter.values[0]} ⨯
            </button>
          ))}
          {filters.length > 0 && (
            <button
              onClick={() => setFilters([])}
              className="bg-black text-white rounded-xl px-2"
            >
              Clear all filters ⨯
            </button>
          )}
        </div>
      </div>
      {showResults ? (
        <Results filters={filters} changeFilter={changeFilter} />
      ) : null}
      <div className="flex flex-col w-max min-w-[100%]">
        <IcicleDiagram filters={filters} showCard={showCard} />
      </div>
      {activeCard}
    </Layout>
  );
};

/**
 * Component that renders the Interactive Framework page for mobile
 * @returns The Interactive Framework page for mobile
 */
const InteractiveFrameworkMobile = () => {
  const [activeCard, setActiveCard] = useState<IcicleData | null>(null);

  return (
    <Layout>
      {activeCard === null && (
        <></>
        // <a
        //   className="mt-2 underline cursor-pointer text-lg"
        //   href="mailto:designingwithai@supsi.ch?subject=Recommend a Tool - Designing With AI Website"
        // >
        //   Recommend a tool
        // </a>
      )}
      <div className="flex flex-col w-full flex-1">
        <MobileIcicleDiagram
          showCard={activeCard}
          setShowCard={setActiveCard}
        />
      </div>
    </Layout>
  );
};

export default InteractiveFramework;
