import IcicleData from "./IcicleData";
import {
  hierarchy as d3Hierarchy,
  partition as d3Partition,
  HierarchyRectangularNode,
} from "d3-hierarchy";

const dataHash = (data: IcicleData): string => {
  return data.name + data.children?.map(dataHash).join("");
};

const toggleStage = (
  stage: IcicleData,
  parents: IcicleData[],
  activeStages: IcicleData[],
  setActiveStages: (value: React.SetStateAction<IcicleData[]>) => void,
  isLeave = false
) => {
  // Get the index of the stage in the activeStages array
  const index = activeStages.findIndex(
    (activeStage) => dataHash(activeStage) === dataHash(stage)
  );
  // If the stage is already active, remove it from the array
  if (index !== -1 && !isLeave) {
    setActiveStages((prev) => prev.slice(0, index));
  } else {
    // If the stage is not active, add it to the array
    setActiveStages([...parents, stage]);
  }
};

const steps = [
  "Design Phase",
  "AI Capability",
  "AI Input (From)",
  "AI Output (To)",
  "Tool",
];

const selectStroke = (select: boolean, stage: IcicleData) => {
  if (select) {
    switch (stage.payment) {
      case "Premium":
        return "box-border border-2 border-blue";
      case "Freemium":
        return "box-border border-2 border-purple";
      case "Free":
        return "box-border border-2 border-beige";
      case "Free-Waiting List":
        return "box-border border-2 border-orange";
      default:
        return "box-border border-2 border-grey";
    }
  }
  return "";
};

export type NodeRect = HierarchyRectangularNode<IcicleData>;

export function calculateRectangles(
  root: IcicleData,
  width: number,
  height: number
): NodeRect[] {
  const rootNode = d3Hierarchy(root)
    .sum((d) => d?.value ?? 0)
    .sort((a, b) => b.height - a.height);
  const partition = d3Partition<IcicleData>().size([height, width]).padding(1);
  return partition(rootNode).descendants();
}

export { toggleStage, steps, selectStroke };
