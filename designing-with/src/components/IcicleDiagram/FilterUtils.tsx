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
  ): IcicleData {
    if (depth > 4) {
      return {
        ...data,
        inFilter: true,
      };
    }

    const filteredChildren = data.children?.map((child) =>
      filterChildren(child, filterArgs, depth + 1)
    );

    // If the current depth is in the filter arguments, filter the children
    if (
      (filterAtDepth(filterArgs, depth) &&
        getFiltersAtDepth(filterArgs, depth).length > 0 &&
        !getFiltersAtDepth(filterArgs, depth).includes(data.name)) ||
      (!filterAtDepth(filterArgs, depth) &&
        filteredChildren?.every((child) => child.inFilter === false))
    ) {
      return {
        ...data,
        inFilter: false,
        children: filteredChildren,
      };
    } else
      return {
        ...data,
        inFilter: true,
        children: filteredChildren,
      };
  }

  return {
    ...filteredData,
    children: filteredData.children?.map((child) =>
      filterChildren(child, filterArgs, 1)
    ),
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
