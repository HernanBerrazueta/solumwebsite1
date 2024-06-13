import placeholder from "../../../assets/images/aboutPage/AboutHero.webp";
// import placeholder from "../../../assets/images/aboutPage/AboutHero1.webp";
import placeholder_1 from "../../../assets/images/aboutPage/AboutHero.webp";
// import placeholder_1 from "../../../assets/images/aboutPage/AboutHero1.webp";
import placeholder_3 from "../../../assets/images/homePage/homepageHero.webp";
// import placeholder_3 from "../../../assets/images/homePage/homepageHero1.webp";
import placeholder_2 from "../../../assets/images/homePage/homepageSection.webp";
// import placeholder_2 from "../../../assets/images/homePage/homepageSection1.webp";
import placeholder_4 from "../../../assets/images/disputePage/dispute.webp";
// import placeholder_4 from "../../../assets/images/disputePage/dispute1.webp";
import placeholder_6 from "../../../assets/images/consultancyPage/consultancy.webp";
// import placeholder_6 from "../../../assets/images/consultancyPage/consultancy1.webp";

interface Article {
  id: number;
  categories: ("Surveys" | "Whitepapers" | "Books")[];
  title: string;
  description: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: 101,
    categories: ["Surveys"],
    title: "IBOR Update",
    image: placeholder,
    description: "Surveys",
  },
  {
    id: 102,
    categories: ["Whitepapers"],
    title: "IBOR Reform",
    image: placeholder_1,
    description: "Whitepapers",
  },
  {
    id: 103,
    categories: ["Books"],
    title: "IBOR Update",
    image: placeholder_2,
    description: "Books",
  },
  {
    id: 104,
    categories: ["Whitepapers"],
    title: "IBOR Update",
    image: placeholder_3,
    description: "Whitepapers",
  },
  {
    id: 105,
    categories: ["Surveys", "Whitepapers"],
    title: "Funding Valuation Adjustment",
    image: placeholder_4,
    description: "Surveys, Whitepapers",
  },
  {
    id: 106,
    categories: ["Whitepapers"],
    title: "A Market Implied Valuation of Loans and their Embedded Optionality",
    image: placeholder_3,
    description: "Whitepapers",
  },
  {
    id: 107,
    categories: ["Whitepapers"],
    title: "IBOR Update",
    image: placeholder_6,
    description: "Whitepapers",
  },
  {
    id: 108,
    categories: ["Books"],
    title: "IBOR Update",
    image: placeholder,
    description: "Books",
  },
  {
    id: 109,
    categories: ["Whitepapers"],
    title: "Buy-Side Participation in OTC Derivatives Market",
    image: placeholder_1,
    description: "Whitepapers",
  },
  {
    id: 110,
    categories: ["Whitepapers"],
    title: "IBOR Update",
    image: placeholder_2,
    description: "Whitepapers",
  },
  {
    id: 111,
    categories: ["Books"],
    title: "IBOR Update",
    image: placeholder_3,
    description: "Books",
  },
  {
    id: 112,
    categories: ["Whitepapers"],
    title: "xVA Goes Mainstream",
    image: placeholder_4,
    description: "Whitepapers",
  },
  {
    id: 113,
    categories: ["Whitepapers"],
    title: "Solum Collateral Management Survey",
    image: placeholder_2,
    description: "Whitepapers",
  },
  {
    id: 114,
    categories: ["Whitepapers"],
    title: "A New Landscape for Derivative End-Users and CCPs",
    image: placeholder_6,
    description: "Whitepapers",
  },
  {
    id: 115,
    categories: ["Whitepapers", "Surveys"],
    title: "IBOR Update",
    image: placeholder,
    description: "Whitepapers, Surveys",
  },
  {
    id: 116,
    categories: ["Whitepapers"],
    title: "IBOR Update",
    image: placeholder_3,
    description: "Whitepapers",
  },
];

export const flashSurveys = [
  "As accounting and regulatory requirements become increasingly complex, banks are facing the ongoing challenge of incorporating these requirements into their derivatives valuation, and in doing so, keeping up with established market practice.",
  "While providing a reliable benchmarking platform, comprehensive surveys can be time-consuming.",
  "The Solum Flash Survey Programme is offering an alternative benchmarking solution; short bespoke surveys, led by banks themselves, on topical problematics with respect to pricing and fair value of derivatives and associated considerations.",
];
