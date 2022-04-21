import React from "react";
import Header from "../../components/Header";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
