import TableForum from "../../components/tableForum";
import { useEffect } from "react";

let data = [
  {
    id: 1,
    name: "Technology",
    tag: "#data",
    time: "2022-11-03",
  },
  {
    id: 2,
    name: "Food",
    tag: "#food",
    time: "2022-11-05",
  },
];

export default function Forum(props) {
  let data = props.data;

  // useEffect(() => {
  //   data.forEach((forum) => {
  //     forum.time = getDateTime(forum.time);
  //   });
  //   console.log(data);
  // }, []);

  return (
    <div className="pt-10">
      <TableForum data={data}></TableForum>
    </div>
  );
}

export async function getServerSideProps(context) {
  data.forEach((forum) => {
    forum.datetime = getDateTime(forum.time);
  });
  // console.log(data);

  return {
    props: {
      data: data,
    },
  };
}

function getDateTime(time) {
  // event.stopPropagation();
  // const currentDate = new Date();
  // let postDate = new Date(data.time);
  // console.log(currentDate.getTime() - postDate.getTime());

  // const currentDate = new Date();
  // let postDate = new Date(data.time);
  // return postDate;

  const date = new Date(time);
  const result = date.toLocaleString("en-UK", {
    dateStyle: "long",
    timeStyle: "short",
  });
  return result;
}
// <div className="overflow-x-auto w-full flex justify-center p-10 ">
//   <table className="table w-3/4">
//     <thead>
//       <tr>
//         <th className="bg-primary-content text-base">Newest</th>
//       </tr>
//       <div className="bg-base-200 text-sm pl-3 space-x-1  ">
//         <div className=" mb-4 cursor-pointer hover:underline display: inline-block ">
//           #Data
//         </div>
//         <div className=" mb-4 cursor-pointer hover:underline display: inline-block ">
//           #Finance
//         </div>
//         <div className=" mb-4 cursor-pointer hover:underline display: inline-block">
//           #Health
//         </div>
//       </div>
//     </thead>
//     <ul role="list" class=" divide-y divide-slate-200">
//       <Link href="/forum/1">
//         <li class="hover:bg-slate-100 active:bg-slate-200 cursor-pointer">
//           <div class="ml-1 overflow-hidden p-1">
//             <div class="text-sm font-medium text-slate-900">Machine</div>
//             <div class="text-sm text-slate-500 truncate">2 mins ago</div>
//           </div>
//         </li>
//       </Link>

//       <Link href="/forum/2">
//         <li class="hover:bg-slate-100 active:bg-slate-200 cursor-pointer">
//           <div class="ml-1 overflow-hidden p-1">
//             <div class="text-sm font-medium text-slate-900">Data</div>
//             <div class="text-sm text-slate-500 truncate">5 mins ago</div>
//           </div>
//         </li>
//       </Link>
//       <Link href="/forum/3">
//         <li class="hover:bg-slate-100 active:bg-slate-200 cursor-pointer">
//           <div class="ml-1 overflow-hidden p-1">
//             <div class="text-sm font-medium text-slate-900">Food</div>
//             <div class="text-sm text-slate-500 truncate">10 mins ago</div>
//           </div>
//         </li>
//       </Link>
//     </ul>
//   </table>
// </div>
