import TableForum from "../../components/tableForum";
import { useEffect } from "react";
import Link from "next/link";

let data = [
  {
    id: 1,
    title: "Technology",
    tag: "#data",
    time: "2022-11-03",
  },
  {
    id: 2,
    title: "Food",
    tag: "#food",
    time: "2022-11-05",
  },
];

export default function Forum(props) {
  let data = props.data;
  return (
    <div className="pt-10 ">
      <div className="flex justify-center">
        <div className="flex justify-end w-3/4">
          <Link href="/question">
            <div className="flex-none">
              {/* <a className="btn bg-blue-400 hover:bg-blue-500 border-0 normal-case text-xl" href="/login">Login</a> */}
              <a className="mr-2 btn btn-sm btn-primary normal-case text-xl">
                Ask a Question
              </a>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-3">
        <TableForum data={data}></TableForum>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  data.forEach((forum) => {
    forum.datetime = getDateTime(forum.time);
  });

  return {
    props: {
      data: data,
    },
  };
}

function getDateTime(time) {
  const date = new Date(time);
  const result = date.toLocaleString("en-UK", {
    dateStyle: "long",
    timeStyle: "short",
  });
  return result;
}
