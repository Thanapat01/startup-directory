import Head from "next/head";
import Image from "next/image";
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
        <div className="mt-10 flex justify-start w-3/4">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered input-sm w-96"
              />
              <button className="btn btn-square btn-sm btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
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
