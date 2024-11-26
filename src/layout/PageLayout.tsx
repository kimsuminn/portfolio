import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutChildrenProps = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: LayoutChildrenProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}