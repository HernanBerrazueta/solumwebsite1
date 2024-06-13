import styled from "styled-components";
import theme from "../../../theme";

export const ArticlesWrapper = styled.div`
  padding: 50px 0;
`;

export const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

export const ArticleCard = styled.div`
  overflow: hidden;
  cursor: pointer;
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ArticleTitle = styled.h3`
  color: #000;
  margin: 10px;
`;

export const ArticleDescription = styled.p`
  margin: 10px;
  color: #000;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.div<{ $active: boolean }>`
  padding: 10px 20px;
  color: ${theme.palette.primary.main};
  cursor: pointer;
  background-color: transparent;
  border-radius: 0px;
  border-bottom: ${({ $active }) =>
    $active ? `2px solid ${theme.palette.primary.main}` : "none"};

  &:hover {
    color: ${theme.palette.primary.main};
  }

  &:focus:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

interface PageButtonProps {
  disabled?: boolean;
  $active?: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
  border-radius: 0;
  padding: 10px;
  font-size: 24px;
  background-color: transparent;
  color: ${({ disabled }) =>
    disabled ? "#ccc" : `${theme.palette.primary.main}`};
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const FlashWrapper = styled.div`
  color: ${theme.palette.primary.main};
  padding: 40px 40px 0;
  line-height: 1.75;
`;

export const FlashTitle = styled.h2`
  margin-bottom: 30px;
`;
