import Link from "next/link";
export default function login() {
  return (
    <div className="flex justify-center pt-10">
      <div className="form-control w-full max-w-xs">
        <div className="text-3xl font-bold">Login</div>
        <label className="label">
          <span className="label-text">ID</span>
        </label>
        <input
          type="text"
          placeholder="ID"
          className="input input-bordered w-full max-w-xs "
        />
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary border-0 normal-case text-xl text-neutral mt-4">
          Login
        </button>
        <div className="flex justify-end mt-2">
          <div className="mr-2">Not a member yet?</div>

          <Link href="/register">
            <a className="link link-hover text-sky-400 font-medium">Register</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
