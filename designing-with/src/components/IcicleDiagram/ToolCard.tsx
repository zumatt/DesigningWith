import Filter from "./Filter";
import { IcicleData } from "./IcicleDiagram";
import { SvgDiagram } from "./SvgDiagramTool";

const RenderToolCards = ({
  stage,
  showCard = () => {},
}: {
  stage: IcicleData;
  showCard?: (card: IcicleData | null) => void;
}) => {
  const selectStroke = (select: boolean) => {
    if (select) {
      switch (stage.payment) {
        case "Premium":
          return "border-2 border-blue";
        case "Freemium":
          return "border-2 border-purple";
        case "Free":
          return "border-2 border-beige";
        case "Free-Waiting List":
          return "border-2 border-orange";
        default:
          return "border-2 border-grey";
      }
    }
    return "";
  };

  return (
    <div
      className={`flex bg-white rounded-lg ${
        stage.description ? "w-[1200px]" : "w-[334px]"
      } px-2 m-1 h-content flex-col ${selectStroke(true)}`}
    >
      <div className="flex flex-col w-full p-5  max-h-[600px] overflow-x-auto">
        <div className="flex flex-row justify-between items-center mb-5">
          <div className="flex flex-row justify-between items-center w-[60%]">
            <h1>{stage.name}</h1>
            <Filter name={stage.payment ?? ""} color={selectStroke(true)} />
            <Filter name={"Type - " + stage.type} color={selectStroke(false)} />
            <Filter
              name={"Skills - " + stage.skills}
              color={selectStroke(false)}
            />
          </div>
          <button
            onClick={() => showCard(null)}
            className="flex bg-white rounded h-full justify-center left-0"
          >
            Close X
          </button>
        </div>
        <h2 className="mb-10">{stage.description}</h2>
        <SvgDiagram jsonDiagramUrl={stage.tooldiagram} />
        <div className="flex flex-row w-full justify-end mt-5">
          <a href={stage.link}>
            <u>Check the tool</u>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RenderToolCards;
