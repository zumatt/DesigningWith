import { useState } from "react";

const AdditionalInformations = ({ information }: { information: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="inline cursor-pointer transition-all select-none"
        onClick={() => setOpen((open) => !open)}
        style={{ color: open ? "#A1A1A1" : "black" }}
      >
        &#123;{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="42"
          viewBox="0 0 40 42"
          fill="none"
          className="inline"
        >
          <path
            d="M20 0L22.5957 13.0111L32.3435 4.01064L26.7957 16.0626L39.9722 14.5106L28.4 21L39.9722 27.4894L26.7957 25.9374L32.3435 37.9894L22.5957 28.9889L20 42L17.4043 28.9889L7.65651 37.9894L13.2043 25.9374L0.027813 27.4894L11.6 21L0.027813 14.5106L13.2043 16.0626L7.65651 4.01064L17.4043 13.0111L20 0Z"
            fill={open ? "#A1A1A1" : "black"}
          />
        </svg>{" "}
      </div>
      {open && information}{" "}
      <div
        className="inline cursor-pointer transition-all select-none"
        onClick={() => setOpen((open) => !open)}
        style={{ color: open ? "#A1A1A1" : "black" }}
      >
        &#125;
      </div>
    </>
  );
};

export default AdditionalInformations;
