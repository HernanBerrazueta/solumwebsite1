import Thu from "../../../assets/images/team/TU.jpeg";
import Gareth from "../../../assets/images/team/Gareth.jpeg";
import Su from "../../../assets/images/team/SU_Green.jpeg";
import Teimuraz from "../../../assets/images/team/Teimuraz.jpeg";
import Vincent from "../../../assets/images/team/Vincent.jpeg";
import Philip from "../../../assets/images/team/Philip.jpeg";
import Kevin from "../../../assets/images/team/Kevin.jpeg";
import Jon from "../../../assets/images/team/Jon.jpeg";

interface TeamData {
  image: string;
  name: string;
  position: string;
  description: string;
  phone: string;
  email: string;
  linkedIn: string;
}

export const team: TeamData[] = [
  {
    image: Thu,
    name: "Thu-Uyen Nguyen",
    position: "Chief Executive Officer",
    description:
      "Thu-Uyen has 27 years of experience in trading complex derivatives and consultancy. Prior to Solum Financial, she worked at Merrill Lynch, Bear Stearns and Chase Manhattan Bank. During her eight years at Merrill Lynch, she was in turn responsible for trading the credit correlation book, new product development, co-heading the Structured Credit Structuring Group, and overseeing the structuring and risk management of the ABS correlation book. For three years at Bear Stearns, Thu-Uyen was responsible for exotic interest rate trading. While at Chase Manhattan, she was an exotic interest rate quant trader and also traded vanilla options. Thu-Uyen holds a five-year engineer degree in Applied Mathematics and Computer Science.",
    phone: "+44 207 786 9231",
    email: "tu@solum-financial.com",
    linkedIn: "https://www.linkedin.com/in/thu-uyen-nguyen-348a45/",
  },
  {
    image: Gareth,
    name: "Gareth Boden",
    position: "Chief Technology Officer",
    description:
      "Gareth has 25 years of experience within technology and has worked in a diverse range of industries, including Financial Services. Gareth was formerly Lead API Architect at ARM. In his prior career he has worked as a Software Architect and Java Consultant for companies including Nokia and Goldman Sachs. Gareth's area of expertise is the creation of robust and cost-effective solutions, through the creation and integration of innovative web-based solutions into existing complex IT landscapes. Gareth holds an MA from Cambridge University in Computer Science.",
    phone: "+44 207 786 9238",
    email: "Gareth.Boden@solum-financial.com",
    linkedIn: "https://www.linkedin.com/in/cambridgeweblab/",
  },
  {
    image: Su,
    name: "Su Green",
    position: "Chief Product Officer",
    description:
      "Su has 22 years of experience in structured credit (structuring, marketing, trading) and consultancy. She was formerly a Portfolio Manager responsible for trading structured credit at CQS, a global credit hedge fund. Prior to this Su was an Executive Director at Morgan Stanley and a Director at Merrill Lynch both within the structured credit areas. She began her career as an interest rate swaps trader at Merrill Lynch. Su holds an MA in Mathematics from Cambridge University.",
    phone: "+44 207 786 9232",
    email: "su@solum-financial.com",
    linkedIn: "www.linkedin.com/in/susan-green-a9a14a20/",
  },
  {
    image: Teimuraz,
    name: "Teimuraz Barbakadze",
    position: "Head of Client Relationships",
    description:
      "Teimuraz has 33 years of experience in banking, asset management and consultancy. Prior to joining Solum Financial, he worked at F&C Asset Management, Société Générale, Merrill Lynch, Deutsche Bank and Moody’s Investors Service. At F&C Asset Management and Société Générale he was head of structured credit business in Europe, specialising in origination, structuring and marketing of various fixed income products as well as managing proprietary asset portfolios. Previously at Deutsche and Merrill he was head of the teams responsible for arbitrage and balance sheet CLOs and regulatory capital management transactions. Teimuraz holds International MBA from Glasgow University and PhD in Mathematics from Moscow Institute of Control Studies.",
    phone: "+44 207 786 9242",
    email: "teimuraz@solum-financial.com ",
    linkedIn: "https://www.linkedin.com/in/teimuraz-barbakadze-82164a1a/",
  },
  {
    image: Vincent,
    name: "Vincent Dahinden",
    position: "Founder & Chairman",
    description:
      "Vincent has 35 years of experience in the financial sector and consultancy, beginning his career in 1986 as a fixed income fund manager at Citibank in Switzerland. He then moved to Merrill Lynch as an FX and interest rates derivatives structurer. At Bear Stearns, he helped build the credit derivatives business in Europe, before joining CSFB as co-head of securitisation for Asia. Returning to Merrill Lynch as a Managing Director in Europe, he ran the Corporate Derivatives desk and eventually the structured credit and corporate securitisation business. In 2004 he joined RBS as Managing Director responsible for the exotic credit trading and structuring business, which included the credit correlation desk, CDO/CLO, structured products and principal finance. Vincent holds an MBA in Finance from Hartford University.",
    phone: "+44 207 786 9235",
    email: "vincent@solum-financial.com",
    linkedIn: "https://www.linkedin.com/in/vincent-dahinden-8586a617/",
  },
  {
    image: Philip,
    name: "Philip Swannell",
    position: "Head of Quantitative Analysis",
    description:
      "Philip has 36 years of experience in OTC derivatives, trading, quantitative analytics and systems design. Philip was formerly a Managing Director at Nomura in London with responsibility for both front office quantitative analytics (rates, credit, commodities and FX) and Nomura's in-house global front-to-back derivative system. Prior to this Philip worked at UBS and NatWest as a derivatives trader and systems designer. Philip holds an MA in Mathematics from Oxford University.",
    phone: "+44 207 786 9239",
    email: "philip@solum-financial.com",
    linkedIn: "https://www.linkedin.com/in/philip-swannell-1a438152/",
  },
  {
    image: Kevin,
    name: "Kevin Liddy",
    position: "Head of Market Research",
    description:
      "Kevin has 37 years of experience in trading, risk management and consultancy. He has acted as an expert witness and been deposed in the US courts. Prior to joining Solum Financial Kevin worked at Chase Manhattan, Bear Stearns, Nat West and Royal Bank of Scotland. At Royal Bank of Scotland he was Global co-head of Counterparty Exposure Management responsible for the Pricing, Management and Trading of all counterparty risk activities. In addition Kevin was Global Head of STIRT, responsible for all Delta trading products in the short end of the curve. Previously at Bear Stearns and Chase Manhattan he was head of Sterling derivative trading. Kevin holds a BSc. Hons in Applied Science from Kingston University.",
    phone: "+44 207 786 9246",
    email: "kevin@solum-financial.com",
    linkedIn: "https://www.linkedin.com/in/kevin-liddy-7171714/",
  },
  {
    image: Jon,
    name: "Jon Gregory",
    position: "Senior Advisor",
    description:
      "Jon has 25 years of experience in credit derivatives, counterparty credit risk management and quantitative credit analytics. He was formerly Head of Quantitative Analytics at Barclays Capital, prior to which he was Global Head of Quantitative Credit Research at BNP-Paribas. Jon is the author of several books and articles, including “Counterparty Credit Risk, the new challenge for global financial markets”, published in 2009. Jon has authored expert witness reports for the US, Canadian and Australian courts and has been deposed in the US. He holds a PhD from Cambridge University.",
    phone: "+44 207 786 9234",
    email: "jon@solum-financial.com",
    linkedIn: "https://www.linkedin.com/in/jon-gregory-0679259/",
  },
];
