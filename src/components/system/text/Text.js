import React from "react";

const TextComponent = ({ ctxEl, content, isLigth }) => {
  const CustomTag = `${ctxEl ? ctxEl : "span"}`;

  return (
    <CustomTag
      style={{ color: isLigth ? (isLigth ? "black" : "white") : "black" }}
    >
      {content ? content : "Вы не указали текст для элемента"}
    </CustomTag>
  );
};

export default TextComponent;
