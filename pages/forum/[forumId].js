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
    <div className="">
      <div className="text-center pt-8 text-3xl">
        Forum Detail {props.forumId}
      </div>
      <div className="flex justify-center">
        <div className="flex  text-center flex-wrap border-solid border-2 border-gray-300 w-3/4">
          <h2 class="mt-10 text-2xl font-extrabold dark:text-black ">
            Payments tool for companies
          </h2>
          <p class="my-4 text-lg text-gray-500 drop-shadow-xl">
            Start developing with an open-source library of over 450+ UI
            components, sections, and pages built with the utility classes from
            Tailwind CSS and designed in Figma.
          </p>
          <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 drop-shadow-xl">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </p>
        </div>
      </div>
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
