import { useRouter } from "next/router";
export default function ForumDetail(props) {
  let data = props.data;

  const router = useRouter();

  function showDetailHandler() {
    if (typeof data.forumId != "undefined") {
      router.push("/pages/forum" + data.forumId);
    }
  }
  return (
    <div className="text-center pt-8 text-3xl">
      Forum Detail {props.forumId}
    </div>
  );
}

export async function getServerSideProps(context) {
  const forumId = context.params.forumId;

  console.log(forumId);
  return {
    props: {
      forumId: forumId,
    },
  };
}
