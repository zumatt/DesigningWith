import { useEffect, useRef, useState } from "react";
import dataJson from "../../assets/tests/data_full.json";
import Filter from "./Filter";
import * as d3 from "d3";
import { IcicleData } from "./IcicleDiagram";

export type FilterArg = {
  depth: number;
  values: string[];
};

export function filterIcicleData(
  data: IcicleData,
  filterArgs: FilterArg[]
): IcicleData {
  // Clone the data object to avoid mutating the original
  const filteredData: IcicleData = { ...data };

  // Helper function to filter children recursively
  function filterChildren(
    data: IcicleData,
    filterArgs: FilterArg[],
    depth = 0
  ): IcicleData | { type: "none" } {
    if (depth > 4) {
      return data;
    }

    // If the current depth is in the filter arguments, filter the children
    if (
      filterAtDepth(filterArgs, depth) &&
      getFiltersAtDepth(filterArgs, depth).length > 0 &&
      !getFiltersAtDepth(filterArgs, depth).includes(data.name)
    ) {
      return { type: "none" };
    }

    if (!data.children || data.children.length === 0) return data;

    const filteredChildren = data.children
      ?.map((child) => filterChildren(child, filterArgs, depth + 1))
      .filter((child) => child.type !== "none");

    if (filteredChildren?.length === 0) {
      return { type: "none" };
    }

    return {
      ...data,
      children: filteredChildren as IcicleData[],
    };
  }

  return {
    ...filteredData,
    children: filteredData.children
      ?.map((child) => filterChildren(child, filterArgs, 1))
      .filter((child) => child.type !== "none") as IcicleData[],
  };
}

const filterAtDepth = (filterArgs: FilterArg[], depth: number): boolean => {
  const filterExist = filterArgs.some((filter) => filter.depth === depth);
  return filterExist;
};

const getFiltersAtDepth = (
  filterArgs: FilterArg[],
  depth: number
): string[] => {
  const filter = filterArgs.find((filter) => filter.depth === depth);
  return filter?.values ?? [];
};
