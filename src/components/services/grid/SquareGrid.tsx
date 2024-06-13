import React from "react";
import { GridItem, GridItemContent } from "./Grid.styled";

interface SquareGridProps {
  text: string;
  hoverText: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

const SquareGrid: React.FC<SquareGridProps> = ({
  text,
  hoverText,
  index,
  hoveredIndex,
  setHoveredIndex,
}) => {
  const isHovered = hoveredIndex === index;

  return (
    <GridItem
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      $ishovered={isHovered ? "true" : "false"}
    >
      <GridItemContent>
        <strong>
          {isHovered ? (
            <span dangerouslySetInnerHTML={{ __html: hoverText }}></span>
          ) : (
            <span dangerouslySetInnerHTML={{ __html: text }}></span>
          )}
        </strong>
      </GridItemContent>
    </GridItem>
  );
};

export default SquareGrid;
