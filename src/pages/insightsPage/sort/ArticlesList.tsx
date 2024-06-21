import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import { articles } from "./articles";
import {
  ArticleCard,
  ArticleDescription,
  ArticleGrid,
  ArticleImage,
  ArticlesWrapper,
  ArticleTitle,
  Button,
  ButtonGroup,
  PageButton,
  Pagination,
} from "./ArticlesList.styled";
import FlashSurveys from "./FlashSurveys";

interface Article {
  id: number;
  categories: ("Surveys" | "Whitepapers" | "Books")[];
  title: string;
  description: string;
  image: string;
  pdf: string;
}

const ArticleList: React.FC = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [filter, setFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesPerPage = 12;
  const buttonGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInitialLoad && buttonGroupRef.current) {
      window.scrollTo({
        top: buttonGroupRef.current.offsetTop,
        behavior: "smooth",
      });
    } else {
      setIsInitialLoad(false);
    }
  }, [currentPage]);

  const filteredArticles: Article[] = articles.filter(
    (article) =>
      filter === "All" ||
      article.categories.includes(filter as "Surveys" | "Whitepapers" | "Books")
  );

  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handleArticleClick = (pdf: string) => {
    window.open(pdf, "_blank");
  };

  return (
    <ArticlesWrapper ref={buttonGroupRef}>
      <ButtonGroup>
        {[
          "All",
          "Surveys",
          "Whitepapers",
          "Books",
          "Flash Survey Programme",
        ].map((category) => (
          <Button
            key={category}
            $active={filter === category}
            onClick={() => handleFilterChange(category)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
      {filter === "Flash Survey Programme" && filteredArticles.length === 0 ? (
        <FlashSurveys />
      ) : (
        <>
          <ArticleGrid>
            {currentArticles.map((article) => (
              <ArticleCard
                key={article.id}
                onClick={() => handleArticleClick(article.pdf)}
              >
                <ArticleImage src={article.image} alt={article.title} />
                <Grid>
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleDescription>{article.description}</ArticleDescription>
                </Grid>
              </ArticleCard>
            ))}
          </ArticleGrid>
          <Pagination>
            <PageButton
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <ArrowBackIosNewSharpIcon fontSize="small" />
            </PageButton>
            {Array.from({ length: totalPages }, (_, index) => (
              <PageButton
                key={index + 1}
                $active={index + 1 === currentPage}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </PageButton>
            ))}
            <PageButton
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              <ArrowForwardIosSharpIcon fontSize="small" />
            </PageButton>
          </Pagination>
        </>
      )}
    </ArticlesWrapper>
  );
};

export default ArticleList;
