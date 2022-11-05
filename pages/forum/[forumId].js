export default function ForumDetail(props) {
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
