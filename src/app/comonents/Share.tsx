import React from "react";
import Image from "./Image";
import { useState } from "react";
export default function Share() {
	const [medai , setMedai]=useState<File | null>(null)
	const hadlMedaichang =(e:React.ChangeEvent<HTMLInputElement>)=>()
	return (
		<div className="p-4 flex gap-4">
			{/** Avataur */}
			<div className=" relative w-10 h-10 rounded-full overflow-hidden">
				<Image path="general/avatar.png" alt="" w={100} h={100} tr={true} />
			</div>
			{/**others */}
			<input type="file" onChange={hadlMedaichang}/>
			<input
				className=" bg-transparent  ouliene-none placeholder:text-textGray"
				type="text"
				placeholder=" What is happening"
			/>
			<div className="flex justify-between items-center gap-4 flex-wrap">
				<div className="flex  gap-4 flex-wrap">
					<Image
						path="icons/image.svg"
						alt=""
						w={20}
						h={20}
						className="cursor-pointer"
					/>
					<Image
						path="icons/gif.svg"
						alt=""
						w={20}
						h={20}
						className="cursor-pointer"
					/>
					<Image
						path="icons/poll.svg"
						alt=""
						w={20}
						h={20}
						className="cursor-pointer"
					/>
					<Image
						path="icons/emoji.svg"
						alt=""
						w={20}
						h={20}
						className="cursor-pointer"
					/>
					<Image
						path="icons/schedule.svg"
						alt=""
						w={20}
						h={20}
						className="cursor-pointer"
					/>
					<Image
						path="icons/location.svg"
						alt=""
						w={20}
						h={20}
						className="cursor-pointer"
					/>
				</div>
				<button
					type="button"
					className=" bg-white text-black rounded-full py-2 px-4"
				>
					Post
				</button>
			</div>
		</div>
	);
}
