import placeholder1 from "../../../assets/images/insightsPage/Books/CCRandCVAbook.webp";
import placeholder2 from "../../../assets/images/insightsPage/Books/CentralCounterparties thumbnail.webp";
import placeholder3 from "../../../assets/images/insightsPage/Books/FinancialCalculusBook.webp";
import placeholder4 from "../../../assets/images/insightsPage/Books/The Oxford handbook of Credit Derivatives thumbnail.webp";
import placeholder5 from "../../../assets/images/insightsPage/Whitepapers/1. IBOR Update [2021]/Ibor Update March 2021 Border.webp";
import placeholder6 from "../../../assets/images/insightsPage/Whitepapers/4. IBOR Update [Novemer 2020]/Ibor Reform November 2020 Front Page-1.webp";
import placeholder7 from "../../../assets/images/insightsPage/Whitepapers/5. IBOR Reform [October 2019]/IBOR Reform White Paper October 2019 Border.webp";
import placeholder8 from "../../../assets/images/insightsPage/Whitepapers/6. IBOR Reform [May 2018]/IBOR Reform White Paper - Solum Financial Limited.webp";
import placeholder9 from "../../../assets/images/insightsPage/Whitepapers/7. Buy-side participation in OTC Derivatives Markets/Buy-side Participation in OTC Derivatives Markets.webp";
import placeholder10 from "../../../assets/images/insightsPage/Whitepapers/8. xVA Goes Mainstream/McKinsey & Solum Whitepaper June 2017 - xVA goes mainstream_vFinal.webp";
import placeholder11 from "../../../assets/images/insightsPage/Whitepapers/9. Solum Collateral Management Survey/20150818_Solum_Collateral_WhitePaper.webp";
import placeholder12 from "../../../assets/images/insightsPage/Whitepapers/11. Clearing and Margining/Solum Insights May 2014 -- The Clearing and Margining Revolution.webp";
import placeholder13 from "../../../assets/images/insightsPage/Whitepapers/12. IFRS 13 Credit Risk Accounting/Solum Monthly Insights May 2013 -- Credit Risk Accounting under IFRS13.webp";
import placeholder14 from "../../../assets/images/insightsPage/Whitepapers/13. 2013 Regulatory Easing/2013-The-year-of-regulatory-easing.webp";
import placeholder15 from "../../../assets/images/insightsPage/Whitepapers/14. The Different Guises of CVA/Solum Monthly Insights December 2012 -- The Different Guises of CVA.webp";
import placeholder16 from "../../../assets/images/insightsPage/Whitepapers/15. CVA Capital Charges/Solum Monthly Insights November 2012 -- CVA Capital Charges - A Comparative Analysis.webp";
import placeholder17 from "../../../assets/images/insightsPage/Whitepapers/16. OTC Derivatives Taking the fun out of funding/Solum-Monthly-Insights-October-2012-Taking-the-fun-out-of-funding.webp";

import pdf8 from "../../../assets/images/insightsPage/Whitepapers/6. IBOR Reform [May 2018]/IBOR Reform White Paper - Solum Financial Limited.pdf";
import pdf9 from "../../../assets/images/insightsPage/Whitepapers/7. Buy-side participation in OTC Derivatives Markets/Buy-side Participation in OTC Derivatives Markets.pdf";
import pdf10 from "../../../assets/images/insightsPage/Whitepapers/8. xVA Goes Mainstream/McKinsey & Solum Whitepaper June 2017 - xVA goes mainstream_vFinal.pdf";
import pdf11 from "../../../assets/images/insightsPage/Whitepapers/9. Solum Collateral Management Survey/20150818_Solum_Collateral_WhitePaper.pdf";
import pdf12 from "../../../assets/images/insightsPage/Whitepapers/11. Clearing and Margining/Solum Insights May 2014 -- The Clearing and Margining Revolution.pdf";
import pdf13 from "../../../assets/images/insightsPage/Whitepapers/12. IFRS 13 Credit Risk Accounting/Solum Monthly Insights May 2013 -- Credit Risk Accounting under IFRS13.pdf";
import pdf14 from "../../../assets/images/insightsPage/Whitepapers/13. 2013 Regulatory Easing/2013-The-year-of-regulatory-easing.pdf";
import pdf15 from "../../../assets/images/insightsPage/Whitepapers/14. The Different Guises of CVA/Solum Monthly Insights December 2012 -- The Different Guises of CVA.pdf";
import pdf16 from "../../../assets/images/insightsPage/Whitepapers/15. CVA Capital Charges/Solum Monthly Insights November 2012 -- CVA Capital Charges - A Comparative Analysis.pdf";
import pdf17 from "../../../assets/images/insightsPage/Whitepapers/16. OTC Derivatives Taking the fun out of funding/Solum-Monthly-Insights-October-2012-Taking-the-fun-out-of-funding.pdf";

interface Article {
  id: number;
  categories: ("Surveys" | "Whitepapers" | "Books")[];
  title: string;
  description: string;
  image: string;
  pdf: string;
}

export const articles: Article[] = [
  {
    id: 101,
    categories: ["Books"],
    title: "Counterparty credit risk and credit value adjustment",
    image: placeholder1,
    description: "Books",
    pdf: "",
  },
  {
    id: 102,
    categories: ["Books"],
    title: "Central Counterparties",
    image: placeholder2,
    description: "Books",
    pdf: "",
  },
  {
    id: 103,
    categories: ["Books"],
    title: "Financial Calculus",
    image: placeholder3,
    description: "Books",
    pdf: "",
  },
  {
    id: 104,
    categories: ["Books"],
    title: "The Oxford Handbook of Credit Derivates",
    image: placeholder4,
    description: "Books",
    pdf: "",
  },
  {
    id: 105,
    categories: ["Whitepapers"],
    title: "IBOR Update III",
    image: placeholder5,
    description: "Whitepapers",
    pdf: "",
  },
  {
    id: 106,
    categories: ["Whitepapers"],
    title: "IBOR Update",
    image: placeholder6,
    description: "Whitepapers",
    pdf: "",
  },
  {
    id: 107,
    categories: ["Whitepapers"],
    title: "IBOR Reform",
    image: placeholder7,
    description: "Whitepapers",
    pdf: "",
  },
  {
    id: 108,
    categories: ["Whitepapers"],
    title: "IBOR Reform",
    image: placeholder8,
    description: "Whitepapers",
    pdf: pdf8,
  },
  {
    id: 109,
    categories: ["Whitepapers"],
    title: "Buy-side Participation in OTC Derivatives Markets",
    image: placeholder9,
    description: "Whitepapers",
    pdf: pdf9,
  },
  {
    id: 110,
    categories: ["Whitepapers"],
    title: "xVA goes mainstream",
    image: placeholder10,
    description: "Whitepapers",
    pdf: pdf10,
  },
  {
    id: 111,
    categories: ["Whitepapers"],
    title: "Solum Collateral Management Survey",
    image: placeholder11,
    description: "Whitepapers",
    pdf: pdf11,
  },
  {
    id: 112,
    categories: ["Whitepapers"],
    title:
      "Regulatory sea change for OTC derivatives: The clearing and margining revolution",
    image: placeholder12,
    description: "Whitepapers",
    pdf: pdf12,
  },
  {
    id: 113,
    categories: ["Whitepapers"],
    title: "Credit Risk Accounting Under IFRS 13 CVA, DVA and FVA",
    image: placeholder13,
    description: "Whitepapers",
    pdf: pdf13,
  },
  {
    id: 114,
    categories: ["Whitepapers"],
    title: "2013: The year of regulatory easing?",
    image: placeholder14,
    description: "Whitepapers",
    pdf: pdf14,
  },
  {
    id: 115,
    categories: ["Whitepapers"],
    title: "The Different Guises of CVA",
    image: placeholder15,
    description: "Whitepapers",
    pdf: pdf15,
  },
  {
    id: 116,
    categories: ["Whitepapers"],
    title: "CVA Capital Charges: A comparative analysis",
    image: placeholder16,
    description: "Whitepapers",
    pdf: pdf16,
  },
  {
    id: 117,
    categories: ["Whitepapers"],
    title: 'OTC Derivatives Taking the "fun" out of funding?',
    image: placeholder17,
    description: "Whitepapers",
    pdf: pdf17,
  },
];

export const flashSurveys = [
  "As accounting and regulatory requirements become increasingly complex, banks are facing the ongoing challenge of incorporating these requirements into their derivatives valuation, and in doing so, keeping up with established market practice.",
  "While providing a reliable benchmarking platform, comprehensive surveys can be time-consuming.",
  "The Solum Flash Survey Programme is offering an alternative benchmarking solution; short bespoke surveys, led by banks themselves, on topical problematics with respect to pricing and fair value of derivatives and associated considerations.",
];
