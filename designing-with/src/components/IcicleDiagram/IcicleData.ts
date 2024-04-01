/**
 * Data structure for Icicle Diagram
 */
type IcicleData = {
    name: string;
    children?: IcicleData[];
    description?: string;
    payment?: string;
    type?: string;
    skills?: string;
    tooldiagram?: string;
    value?: number;
    link?: string;
    inFilter?: boolean;
  };

  export default IcicleData;