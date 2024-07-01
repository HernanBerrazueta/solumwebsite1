import Image from "../../../assets/images/homePage/homepageHero.webp";
import AboutBottom from "../../../assets/images/aboutPage/AboutHero.webp";

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
    src: Image,
    alt: "Round tunnel",
    title: "Sharing our expertise",
    subtitle:
      "We’re intensely proud of the long-term relationships we’ve built with clients ranging from banks and supranational organisations to corporates, insurance companies, public sector entities and asset management firms.",
    text: "These relationships are built on two things. The first is our first-hand experience of working with derivatives in front-office banking roles ranging from trading and structuring to quantitative analysis and risk management.",
    subText:
      "The second is our focus on derivatives. Our clients know that when you need specialist advice, only a true specialist with practical expertise can provide it.",
  },
  {
    src: AboutBottom,
    alt: "River flows through the rocks",
    title: "Our Approach",
    subtitle: "",
    text: "We prioritise client satisfaction above all else. Our team excels in actively listening and adeptly interpreting the nuanced needs of our clients.",
    subText:
      "Leveraging our multi-disciplinary expertise, we meticulously craft bespoke solutions that precisely align with your unique requirements.",
  },
];
