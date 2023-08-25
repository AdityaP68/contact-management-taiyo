import React from "react";

type ChildProps = {
  children: React.ReactNode;
};

function Card({ children }: ChildProps) {
  return <div className="bg-white w-full rounded p-4 flex">{children}</div>;
}

export default Card;
