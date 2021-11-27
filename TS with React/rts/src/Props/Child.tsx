import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <>
      <div>{color}</div>
      <button onClick={onClick}></button>
    </>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <>
      {children}
      <div>{color}</div>
      <button onClick={onClick}></button>
    </>
  );
};
