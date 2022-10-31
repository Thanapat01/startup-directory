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
    <div className="text-neutral pt-16 text-l flex justify-center">
      <div className="grid grid-cols-4 gap-8 bg-primary-content p-4 w-3/4">
        <div className="avatar row-span-2">
          <div className="w-32 rounded">
            <Image src={data.logo} layout="fill" objectFit="contain"></Image>
          </div>
        </div>
        <div className="col-span-2 text-3xl">{data.name}</div>
        <div className="text-end mr-16">
          {data.origin} {data.year}
        </div>
        <div className="col-span-3 flex items-center justify-between mr-8">
          <div className="flex items-center">
            <div className="badge badge-primary">Industry</div>
            <div className="ml-2">{data.industry}</div>
          </div>
          <div className="flex items-center">
            <div className="badge badge-primary">Stage</div>
            <div className="ml-2">{data.stage}</div>
          </div>
          <div className="flex items-center">
            <div className="badge badge-primary">Website</div>
            <div>
              <a
                className="ml-2"
                href={data.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.website}
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-4 ml-16 mt-4 indent-8">{data.about}</div>
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
