import Head from "next/head";
import Image from "next/image";
import Chip from "../components/chip";
import Modal from "../components/modal";
import SearchBar from "../components/searchBar";
import Table from "../components/table";
import styles from "../styles/Home.module.css";
import { MongoClient } from "mongodb";

export default function Home(props) {
  let data = props.data;
  // console.log(props.data)

  return (
    <div>
      <h1 className="pt-10 text-3xl text-center">Main Page</h1>
      <div className="flex justify-center">
        <div className="mt-10 flex gap-4 items-center w-3/4">
          <SearchBar></SearchBar>
          <Modal name="Voice"></Modal>
          <Modal name="Image"></Modal>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-4 flex gap-4 items-center w-3/4">
          <Chip name="Manufacturing & Construction"></Chip>
          <Chip name="Food & Agriculture"></Chip>
          <Chip name="Hospitality & Tourism"></Chip>
          <Chip name="..."></Chip>
          <Chip name="..."></Chip>
        </div>
      </div>
      <div className="mt-4">
        <Table data={data}></Table>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = new MongoClient(process.env.MONGODB_URI);
  let data = [];

  try {
    const database = client.db("startup_directory");
    const startup = database.collection("startup");

    const cursor = startup.find({});
    data = await cursor.toArray();
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
