import Link from "next/link";

export default function Navbar() {
  return (
    <div className="text-neutral navbar bg-primary-content">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">Main</a>
        </Link>
        <Link href="/forum">
          <a className="btn btn-ghost normal-case text-xl">Forum</a>
        </Link>
        <a className="btn btn-ghost normal-case text-xl">...</a>
      </div>
      <Link href="/login">
        <div className="flex-none">
          {/* <a className="btn bg-blue-400 hover:bg-blue-500 border-0 normal-case text-xl" href="/login">Login</a> */}
          <a className="btn btn-primary normal-case text-xl">Login</a>
        </div>
      </Link>
    </div>
  );
}
