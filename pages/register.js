export default function login() {
  return (
    <div className="flex justify-center pt-10">
      <div className="form-control w-full max-w-xs">
        <div className="text-3xl font-bold">Register</div>
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

        <label className="label">
          <span className="label-text">Confirm Password</span>
        </label>
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
        />

        <button className="btn btn-primary border-0 normal-case text-xl mt-4">
          {" "}
          Register{" "}
        </button>
      </div>
    </div>
  );
}
