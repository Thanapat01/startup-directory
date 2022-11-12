import Image from "next/image";
import { MongoClient, ObjectId } from "mongodb";

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

  const client = new MongoClient(process.env.MONGODB_URI);
  let data = [];

  try {
    const database = client.db("startup_directory");
    const startup = database.collection("startup");

    data = await startup.findOne({ _id: ObjectId(startupId) });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
