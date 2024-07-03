import HomeHero from "../../../assets/images/homePage/homepageSection.webp";
import ConsultancyHero from "../../../assets/images/consultancyPage/consultancy.webp";
import DisputeHero from "../../../assets/images/disputePage/dispute.webp";
import InsightsHero from "../../../assets/images/insightsPage/insights.webp";
import AboutHero from "../../../assets/images/aboutPage/AboutHero.webp";

interface Data {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  text: string;
  subText: string;
}

export const imageData: Data[] = [
  {
    src: HomeHero,
    alt: "Tunnel",
    title: "Dedicated to derivatives",
    subtitle:
      "Derivatives are complex, but they need not be opaque or daunting",
    text: "From finance professionals and corporate treasurers to business leaders and legal teams, Solum’s clients rely on Solum’s services and software to bring clarity and control to derivatives, and to better understand and manage their portfolios.",
    subText: "",
  },
  {
    src: AboutHero,
    alt: "Modern Tunnel",
    title: "Our approach",
    subtitle:
      "Individually and collectively, we’re committed to being the very best at what we do. Which is why we invest in long-term relationship and trust building.",
    text: "This means we’re able to take the time to get a deep understanding of our clients’ organisations – their aims, their challenges, their ways of working. It also means that whenever our clients require it, we’re on hand with precisely the specialist advice and support they need.",
    subText: "",
  },
  {
    src: ConsultancyHero,
    alt: "Tunnel with huge arch",
    title: "Consultancy",
    subtitle:
      "Over the past 15 years, Solum has executed over a hundred advisory mandates. In every instance, we’ve helped clients to cut through the complexity associated with derivatives, to exert greater control over their holdings, and to reduce their risk.",
    text: "Some clients are corporate treasuries using derivatives to mitigate exposure and improve risk management. Some are global financial institutions looking for increased efficiencies. Others are funds and auditors looking for an edge in their sector, with accuracy and scalability in mind. To all of them, we bring hands-on support, independent advice and practical, pertinent guidance.",
    subText: "",
  },
  {
    src: DisputeHero,
    alt: "Ancient Tunnel",
    title: "Dispute Services",
    subtitle:
      "Legal teams come to Solum for a variety of reasons. Sometimes it’s when they’re assessing the overall merits of a case or looking to augment their understanding of best practice or loss quantification.",
    text: "Other times, it’s later on in a dispute, when litigators find themselves in need of specialist data analysis, valuation services, documentation reviews or expert testimony.",
    subText:
      "All in all, we've been called on in more than a hundred cases to ensure that lawyers and their clients have all the specialist insight and independent advice they need, right when they need it.",
  },
  {
    src: InsightsHero,
    alt: "Road tunnel",
    title: "Insights",
    subtitle: "",
    text: "Discover expert insights and in-depth analysis on derivatives landscape through our insights page.",
    subText:
      "Sign up to stay informed on market trends, strategies and expert perspectives.",
  },
  {
    src: " ",
    alt: "Contact",
    title: "Contact Us",
    subtitle: "contact@solum-financial.com",
    text: "+447 (0) 207869230",
    subText:
      "Gridiron Building, <br> 1 Pancras Square <br> London <br> N1C 4AG",
  },
];
