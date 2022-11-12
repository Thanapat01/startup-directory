import Link from "next/link";

export default function Navbar() {
  return (
    <div className="text-neutral navbar bg-base-100 border-b border-slate-900/10 sticky top-0 z-50">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl ">Main</a>
        </Link>
        <Link href="/forum">
          <a className="btn btn-ghost normal-case text-xl">Forum</a>
        </Link>
        <a className="btn btn-ghost normal-case text-xl">...</a>
      </div>
      <Link href="/login">
        <div className="flex-none">
          {/* <a className="btn bg-blue-400 hover:bg-blue-500 border-0 normal-case text-xl" href="/login">Login</a> */}
          <a className="btn btn-primary normal-case text-xl text-neutral">
            Login
          </a>
        </div>
      </Link>
      <Link href="/register">
        <div className="flex-none">
          {/* <a className="btn bg-blue-400 hover:bg-blue-500 border-0 normal-case text-xl" href="/login">Login</a> */}
          <a className="ml-2 btn btn-primary normal-case text-xl">Register</a>
        </div>
      </Link>
    </div>
  );
}
