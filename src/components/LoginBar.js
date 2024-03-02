export default function LoginBar(options) {
	return (
		<div className="flex justify-end w-screen h-10 items-center bg-transparent p-2">
			<button className=" text-buttonTextColor bg-buttonColor rounded w-20">
				Login
			</button>
			<p className="text-secondaryBgColor">Name</p>
		</div>
	);
}
