import Image from "next/image";

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

export default function StartupDetail(props) {
  let data = props.data;

  return (
    <div className="pt-16 text-l flex justify-center">
      <div className="grid grid-cols-4 gap-8 p-8 w-3/4 rounded-md border-2 border-slate-900/10">
        <div className="avatar row-span-2 flex justify-center">
          <div className="w-48 rounded ring-2 ring-slate-900/10 relative">
            <Image src={data.logo} layout="fill" objectFit="contain"></Image>
          </div>
        </div>
        <div className="flex items-center">
          <div className="badge badge-primary text-neutral font-semibold">
            Name
          </div>
          <div className="ml-4">{data.name}</div>
        </div>
        <div className="flex items-center">
          <div className="badge badge-primary text-neutral font-semibold">
            Industry
          </div>
          <div className="ml-4">{data.industry}</div>
        </div>
        <div className="flex items-center">
          <div className="badge badge-primary text-neutral font-semibold">
            Year
          </div>
          <div className="ml-4">{data.year}</div>
        </div>
        <div className="flex items-center">
          <div className="badge badge-primary text-neutral font-semibold">
            Status
          </div>
          <div className="ml-4">{data.stage}</div>
        </div>
        <div className="col-span-2 flex items-center">
          <div className="badge badge-primary text-neutral font-semibold">
            Origin
          </div>
          <div className="ml-4">{data.origin}</div>
        </div>

        <div className="col-span-4 ml-16">
          <div className="badge badge-primary text-neutral font-semibold">
            Description
          </div>
          <div className="ml-8 indent-8">{data.about}</div>
        </div>
        <div className="col-start-4 flex justify-end items-center">
          <div className="badge badge-primary text-neutral font-semibold">
            Website
          </div>
          <div>
            <a
              className="ml-2 link link-hover"
              href={data.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const startupId = context.params.startupId;

  let selectedStartup = data.find((o) => o.id == startupId);

  return {
    props: {
      data: selectedStartup,
    },
  };
}
