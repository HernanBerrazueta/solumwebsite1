import Image from "../../../assets/images/homePage/homepageHero.webp";
// import Image from "../../../assets/images/homePage/homepageHero1.webp";
import AboutBottom from "../../../assets/images/aboutPage/AboutHero.webp";
// import AboutBottom from "../../../assets/images/aboutPage/AboutHero1.webp";

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
    alt: "Description of the image",
    title: "Sharing our Expertise",
    subtitle:
      "We are a team of investment banking professionals with extensive experience in banking front-office trading and technology, delivering tailored solutions across all facets of derivatives.",
    text: "Our commitment is to impart our expertise to clients in a conflict-free manner, driven by tangible results.",
    subText:
      "Over the years, we have proudly cultivated enduring partnerships with a diverse array of clients, ranging from banks and supranational organisations to corporates, insurance companies, public sector entities, and asset management firms.",
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
