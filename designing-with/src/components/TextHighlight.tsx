const TextHighlight = ({
  type,
  children,
}: {
  type: string;
  children: React.ReactNode[] | React.ReactNode;
}) => {
  return (
    <p
      className={`rounded-lg inline px-1 ${
        type === "input" ? "bg-[#72dafb]" : "bg-[#5b99f4]"
      }`}
    >
      {children}
    </p>
  );
};

export default TextHighlight;
