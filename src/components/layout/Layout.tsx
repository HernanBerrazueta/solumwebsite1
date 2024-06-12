import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import ScrollBtn from "./scrollBtn/ScrollBtn";

const Layout: React.FC = () => {
  const [showBtn, setShowBtn] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollBtnVisibility = () => {
      window.pageYOffset > 300 ? setShowBtn(true) : setShowBtn(false);
    };
    window.addEventListener("scroll", handleScrollBtnVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollBtnVisibility);
    };
  }, []);

  return (
    <>
      {showBtn && <ScrollBtn handleScrollToTop={handleScrollToTop} />}
      <Suspense /*fallback={<div>Loading...</div>}*/>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
