const TextHighlight4 = ({
    children,
    color = "bg-[#D9D9D9] bg-opacity-50 shadow-[#A0A0A0]",
  }: {
    children: React.ReactNode[] | React.ReactNode;
    color?: string;
  }) => {
    return (
      <h2
        className={`inline ${color} shadow-[inset_0_0_10px_5px_rgba(1,1,1,0)] rounded-xl px-8`}
      >
        {children}
      </h2>
    );
  };
  
  export default TextHighlight4;
  