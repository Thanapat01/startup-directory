export default function login() {
    return (
        <div className="flex justify-center mt-10">
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">ID</span>
                </label>
                <input type="text" placeholder="ID" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                <button className="btn bg-blue-400 hover:bg-blue-500 border-0 normal-case text-xl mt-4"> Login </button>
            </div>
        </div>
    )
}