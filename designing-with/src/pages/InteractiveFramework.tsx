import React, { ReactNode } from "react";
import Layout from "../components/Layout";
import Filter from "../components/IcicleDiagram/Filter";
import { useState } from "react";
import IcicleDiagram, {
  IcicleData,
} from "../components/IcicleDiagram/IcicleDiagram";
import { FilterArg } from "../components/IcicleDiagram/FilterUtils";
import { Results } from "../components/IcicleDiagram/Filters";
import RenderToolCards from "../components/IcicleDiagram/ToolCard";

const InteractiveFramework = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(!showResults);
  const [filters, setFilters] = useState<FilterArg[]>([]);
  const [activeCard, setActiveCard] = useState<ReactNode>(null);

  const showCard = (card: IcicleData | null) => {
    console.log(card);
    if (card) {
      setActiveCard(<RenderToolCards stage={card} showCard={showCard} />);
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
      <a
        className="mt-[33px] underline cursor-pointer text-xl"
        href="www.google.com"
      >
        Recommend a tool
      </a>
      <div className="md:flex flex-row justify-end gap-2 hidden">
        <Filter name="Premium" color="border-blue" />
        <Filter name="Freemium" color="border-purple" />
        <Filter name="Free" color="border-beige" />
        <Filter name="Free-Waiting List" color="border-orange" />
      </div>
      <button
        className={` md:flex w-full rounded my-2 bg-opacity-45 hidden   ${
          showResults ? "bg-gray-200" : ""
        } `}
        onClick={onClick}
      >
        Filter by ({showResults ? "-" : "+"})
      </button>
      {showResults ? (
        <Results filters={filters} changeFilter={changeFilter} />
      ) : null}
      <div className="flex flex-col w-max min-w-[100%]">
        <IcicleDiagram filters={filters} showCard={showCard} />
      </div>
      {activeCard && (
        <div className="flex flex-row fixed bottom-0 right-0 z-10">
          {activeCard}
        </div>
      )}
    </Layout>
  );
};

export default InteractiveFramework;
