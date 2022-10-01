import React from "react";

const MainContainer = ({ children, style }) => {
  style = style ? style : "";
  return <div className={`container ${style}`}>{children}</div>;
};

export default MainContainer;
