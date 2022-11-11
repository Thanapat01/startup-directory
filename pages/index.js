import Head from "next/head";
import Image from "next/image";
import Chip from "../components/chip";
import SearchBar from "../components/searchBar";
import Table from "../components/table";
import styles from "../styles/Home.module.css";

let data = [
  {
    id: 1,
    name: "Dragomo",
    about:
      "We are a production studio that combines technologies such as 3D rendering, Interactive, Immersive, IOT, AI, Blockchian to lead our clients to a successful metavers project.",
    industry: "Manufacturing & Construction",
    year: "2015",
    stage: "Seed",
    origin: "Thailand",
    website: "http://www.dragomo.com/",
    logo: "https://drive.google.com/uc?id=1q3QYwevwkEk9sq9WTlf3VwjsUUvq8P5b",
  },
  {
    id: 2,
    name: "Dream Spoon's ice cream",
    about: "The best 'guilt-free ice cream' with premium deliciousness",
    industry: "Food & Agriculture",
    year: "2020",
    stage: "Transformed SME",
    origin: "Thailand",
    website: "https://dreamspoonsicecream.com/",
    logo: "https://lh3.googleusercontent.com/u/0/d/1Qhht4i0sKwvxbjG1bifMveJU2fmbC1Cc=w1920-h969-iv1",
  },
  {
    id: 3,
    name: "DriveMate",
    about:
      "Drivemate, car rental between individuals and pros insured by LMG Switch your car with your passion",
    industry: "Hospitality & Tourism",
    year: "2017",
    stage: "Funded",
    origin: "Thailand",
    website: "https://www.drivemate.asia/en",
    logo: "https://lh3.googleusercontent.com/u/0/d/1prKoGWKstSvnQHG16dCyes36cR85OsZc=w1920-h969-iv1",
  },
];

export default function Home(props) {
  let data = props.data;
  // console.log(props.data)

  return (
    <div>
      <h1 className="pt-10 text-3xl text-center">Main Page</h1>
      <div className="flex justify-center">
        <div className="mt-10 flex justify-between items-center w-3/4">
          <SearchBar></SearchBar>
          <Chip name="Manufacturing & Construction"></Chip>
          <Chip name="Food & Agriculture"></Chip>
          <Chip name="Hospitality & Tourism"></Chip>
        </div>
      </div>
      <div className="mt-4">
        <Table data={data}></Table>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      data: data,
    },
  };
}
