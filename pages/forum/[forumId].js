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
        <div className="flex text-center bg-base-200 flex-wrap border-solid border-2 rounded-xl border-gray-300 w-3/4 ">
          <div className="mb-3 ml-3 mt-5 text-2xl font-extrabold ">
            Topic Here
          </div>
          <p className="ml-3 text-left my-4 text-lg text-gray-500 drop-shadow-xl">
            message here message here message here message here message here
            message here message here message here message here message here
            message here message here message here message here message here
            message here message here message here message here message here
            message here message here message here message here message here
            message here message here message here
          </p>
          <div className="flex">
            <div className="flex items-center space-x-4 ">
              {/* <img
                className="ml-3 mb-3 w-12 h-12 rounded-full  "
                src="https://i.pinimg.com/564x/98/fc/88/98fc8863c7e68df57cd7ad7442f0ec18.jpg"
                alt=""
              ></img> */}
            </div>
            <div className="ml-3">
              <div className="font-medium text-left">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 text-left">
                  Joined in August 2014
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mt-5 flex justify-center ">
          <textarea
            id="message"
            rows="7"
            className="block p-2.5 w-3/4 text-sm rounded-lg border-black bg-gray-200 border-gray-200 placeholder-gray-400 focus:outline-none"
            placeholder="Your message..."
          ></textarea>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-start w-3/4">
            <div className="flex-none">
              <a className="mt-3 mr-2 btn btn-sm btn-primary normal-case text-xl">
                Comment
              </a>
            </div>
          </div>
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
