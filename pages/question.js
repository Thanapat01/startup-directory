import Link from "next/link";
import AskQuestion from "../components/askQuestion";

export default function Question() {
  return (
    <div className="pt-10 flex justify-center">
      <div className="mb-6 w-3/4 ">
        <label className="content-center block mb-2 text-xl font-medium text-gray-900 dark:text-black-300">
          What are you curious about?
        </label>
        <input
          className=" p-2.5 bg-gray-200 input input-bordered input-m w-full focus:outline-none"
          placeholder="topic"
        ></input>
        <div className="mt-6 mb-6 w-3/4 ">
          <label className="content-center block mb-2 text-l font-medium text-gray-900 dark:text-black-300">
            Description
          </label>
        </div>
        <textarea
          id="message"
          rows="15"
          className="block p-2.5 w-full text-sm rounded-lg border-black bg-gray-200 border-gray-200 placeholder-gray-400 focus:outline-none"
          placeholder="Your message..."
        ></textarea>

        <button
          type="submit"
          className="mt-3 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Publish post
        </button>
      </div>
    </div>
  );
}
