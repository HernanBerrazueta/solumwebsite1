import HomeHero from "../../../assets/images/homePage/homepageSection.webp";
// import HomeHero from "../../../assets/images/homePage/homepageSection1.webp";
import ConsultancyHero from "../../../assets/images/consultancyPage/consultancy.webp";
// import ConsultancyHero from "../../../assets/images/consultancyPage/consultancy1.webp";
import DisputeHero from "../../../assets/images/disputePage/dispute.webp";
// import DisputeHero from "../../../assets/images/disputePage/dispute1.webp";
import InsightsHero from "../../../assets/images/insightsPage/insights.webp";
// import InsightsHero from "../../../assets/images/insightsPage/insights1.webp";
import AboutHero from "../../../assets/images/aboutPage/AboutHero.webp";
// import AboutHero from "../../../assets/images/aboutPage/AboutHero1.webp";

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
    alt: "Coast and Ocean",
    title: "Dedicated to derivatives",
    subtitle:
      "Financial derivatives are complex, but they need not be opaque and daunting.",
    text: "We are dedicated to supporting institutions better understand and manage their derivatives portfolio.",
    subText:
      "Leverage our consultancy, dispute services, and advanced valuation and data control software to empower your derivatives management.",
  },
  {
    src: AboutHero,
    alt: "River flows through the rocks",
    title: "Our approach",
    subtitle:
      "We prioritise cultivating positive long-term client relationships, based on trust and ongoing dialogue.",
    text: "Teamwork and care are at the heart of our ability to provide high quality solutions to our clients.",
    subText:
      "Not only this fosters a positive work environment, it also enables us to leverage decades of collective expertise from tier-one financial institutions.",
  },
  {
    src: ConsultancyHero,
    alt: "River",
    title: "Consultancy",
    subtitle: "",
    text: "Over the last 15 years we have executed over 100 advisory mandates with major financial institutions and corporates around the world.",
    subText:
      "Our clients have expressed their appreciation for our hands-on experience and independent advice, valuing our commitment to providing practical and pertinent guidance.",
  },
  {
    src: DisputeHero,
    alt: "Curved River",
    title: "Dispute Services",
    subtitle: "",
    text: "Over the past 15 years, we have been entrusted to assist litigation lawyers with over 100 cases, drawing upon our extensive practical expertise to offer forensic data analysis, valuation services, documentation review and expert witness work in all stages of litigation.",
    subText:
      "Our expert input can prove particularly valuable in the preliminary stages, by aiding legal teams in assessing the merits of a case, e.g. in the context of best market practice and loss quantification.",
  },
  {
    // src: PublicationsHero, //this picture is absent
    src: InsightsHero,
    alt: "Tunnel",
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
