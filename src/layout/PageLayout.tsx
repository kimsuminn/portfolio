import React from "react";
import Header from "./Header";

type LayoutChildrenProps = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: LayoutChildrenProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}