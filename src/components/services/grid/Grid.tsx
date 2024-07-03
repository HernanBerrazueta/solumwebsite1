import React, { useState } from "react";
import { GridContainer } from "./Grid.styled";
import {
  consultancySquareTexts,
  disputeSquareTexts,
  consultancyHoverTexts,
  disputeHoverTexts,
} from "./data";
import { useLocation } from "react-router-dom";
import SquareGrid from "./SquareGrid";

type SquareTextData = { item1: string; item2?: string; item3?: string };
type HoverTextData = {
  item1: string;
  item2?: string;
  item3?: string;
  item4?: string;
};

const Grid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();
  const isConsultancyPage = location.pathname === "/consultancy";
  const isDisputePage = location.pathname === "/dispute-services";

  let squareTextData: SquareTextData[];
  let hoverTextData: HoverTextData[];

  if (isConsultancyPage) {
    squareTextData = consultancySquareTexts;
    hoverTextData = consultancyHoverTexts;
  } else if (isDisputePage) {
    squareTextData = disputeSquareTexts;
    hoverTextData = disputeHoverTexts;
  } else {
    squareTextData = consultancySquareTexts;
    hoverTextData = consultancyHoverTexts;
  }

  const firstRowData = squareTextData.slice(0, 4);
  const secondRowData = squareTextData.slice(4);

  return (
    <>
      <GridContainer>
        {firstRowData.map((text, index) => (
          <SquareGrid
            key={index}
            text={text}
            hoverText={hoverTextData[index]}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </GridContainer>
      {secondRowData.length > 0 && (
        <GridContainer>
          {secondRowData.map((text, index) => (
            <SquareGrid
              key={index + firstRowData.length}
              text={text}
              hoverText={hoverTextData[index + firstRowData.length]}
              index={index + firstRowData.length}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </GridContainer>
      )}
    </>
  );
};

export default Grid;
