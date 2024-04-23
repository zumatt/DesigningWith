const TextIncircle = ({
    children,
    color  ,
  }: {
    children: React.ReactNode[] | React.ReactNode;
    color?: string;
  }) => {
    return (
      <p
        className={`inline ${color} border rounded-xl`}
      >
        {children}
      </p>
    );
  };
  
  export default TextIncircle;