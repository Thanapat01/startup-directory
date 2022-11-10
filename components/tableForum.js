import ForumItem from "./forumItem";

export default function TableForum(props) {
  let data = props.data;

  return (
    <div className="overflow-x-auto w-full flex justify-center">
      <table className="table w-3/4">
        <thead>
          <tr>
            <th className="bg-primary text-neutral text-lg">Newest</th>
          </tr>
        </thead>
        {data.map((data) => {
          return <ForumItem key={data.id} data={data}></ForumItem>;
        })}
      </table>
    </div>
  );
}
