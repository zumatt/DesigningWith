const TextHighlight2 = ({
    children,
  }: {
    children: React.ReactNode[] | React.ReactNode;
  }) => {
    return (
      <h2
        className='inline bg-[#D9D9D9] bg-opacity-50 shadow-[inset_0_0_10px_5px_rgba(1,1,1,0)] shadow-[#A0A0A0] rounded-2xl'
      >
        {children}
      </h2>
    );
  };
  
export default TextHighlight2;
  