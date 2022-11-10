import Image from "next/image";
import StartupItem from "./startupItem";

export default function Table(props) {
  let data = props.data;

  return (
    <div className="overflow-x-auto w-full flex justify-center">
      <table className="table w-3/4 ">
        <thead>
          <tr>
            <th className="bg-primary text-white ">Name</th>
            <th className="bg-primary text-white ">Industry</th>
            <th className="bg-primary text-white ">Stage</th>
            <th className="bg-primary"></th>
          </tr>
        </thead>

        {data.map((data) => {
          return <StartupItem key={data.id} data={data}></StartupItem>;
        })}
      </table>
    </div>
  );
}
