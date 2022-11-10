import { useRouter } from "next/router";

export default function ForumItem(props) {
  let data = props.data;

  const router = useRouter();

  function showDetailHandler() {
    if (typeof data.id != "undefined") {
      router.push("/forum/" + data.id);
    }
  }
  function tagHandler(event) {
    event.stopPropagation();
    console.log("test");
  }

  function getDateTime(event) {
    // event.stopPropagation();
    // const currentDate = new Date();
    // let postDate = new Date(data.time);
    // console.log(currentDate.getTime() - postDate.getTime());

    // const currentDate = new Date();
    // let postDate = new Date(data.time);
    // return postDate;

    const date = new Date(data.time);
    const result = date.toLocaleString("en-UK", {
      dateStyle: "long",
      timeStyle: "short",
    });
    return result;
  }

  return (
    <tbody key={data.id}>
      <tr>
        <td className="hover:bg-slate-200 bg-slate-100  cursor-pointer">
          <div
            className="flex items-center space-x-3 "
            onClick={showDetailHandler}
          >
            <div>
              <div className="flex items-end">
                <div className="font-bold">{data.name}</div>
                <div
                  className="text-sm ml-4 hover:bg-slate-300"
                  onClick={tagHandler}
                >
                  {data.tag}
                </div>
              </div>
              {/* <button className="btn" onClick={getDateTime}>
                Click
              </button> */}
              <div className="text-sm max-w-lg break-normal whitespace-normal ">
                {getDateTime().toString()}
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
