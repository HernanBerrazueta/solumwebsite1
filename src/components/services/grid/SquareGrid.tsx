import React from "react";
import { GridItem, GridItemContent, HoverItem } from "./Grid.styled";

interface SquareGridProps {
  text: TextObject;
  hoverText: HoverTextObject;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

type TextObject = {
  item1: string;
  item2?: string;
  item3?: string;
};

type HoverTextObject = {
  item1: string;
  item2?: string;
  item3?: string;
  item4?: string;
};

const SquareGrid: React.FC<SquareGridProps> = ({
  text,
  hoverText,
  index,
  hoveredIndex,
  setHoveredIndex,
}) => {
  const isHovered = hoveredIndex === index;

  const renderText = (
    textObj: TextObject | HoverTextObject,
    isHover: boolean
  ) => {
    return Object.values(textObj).map((item, idx) =>
      item ? (
        <HoverItem key={idx} $ishover={isHover}>
          {item}
        </HoverItem>
      ) : null
    );
  };

  return (
    <GridItem
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      ishovered={isHovered ? "true" : "false"}
    >
      <GridItemContent>
        {isHovered ? (
          <div>{renderText(hoverText, true)}</div>
        ) : (
          <div>{renderText(text, false)}</div>
        )}
      </GridItemContent>
    </GridItem>
  );
};

export default SquareGrid;
