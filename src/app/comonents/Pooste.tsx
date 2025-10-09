import React from "react";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PosteInteraction from "./PosteInteraction";

export default function Poste() {
	return (
		<div className="p-4 border-y-[1px] border-y-borderGray">
			{/* POST TYPE*/}
			<div className=" flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
				<span className=""> Lama Dev Reposted</span>
			</div>
			<div className="flex gap-4">
				{/*Avatar*/}
				<div className=" relative w-10 h-10 rounded-full overflow-hidden ">
					<Image path="general/avatar.png" alt="" h={100} w={100} tr={true} />
				</div>
				{/**Contenar*/}
				<div className=" flex-1 flex flex-col gap-2">
					{/**Top */}
					<div className=" flex items-center justify-between gap-[8px]">
						<div className=" flex items-center gap-2 flex-wrap">
							<h1 className=" text-md font-bold">Ibrahim Adam</h1>
							<span className="text-textGray">@iadam</span>
							<span className="text-textGray">1 day ago</span>
						</div>
						<PostInfo />
					</div>
					<div className="">
						<p>
							{" "}
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
							facilis in unde, magni nisi eum beatae suscipit temporibus nihil
							cum molestias animi maiores eos. Perferendis ipsam, nobis ipsa
							iure explicabo numquam sapiente praesentium nostrum porro, vel
							excepturi eum, dicta expedita voluptate libero adipisci nihil
							distinctio deleniti iusto labore exercitationem nisi suscipit
							incidunt? Maxime illum laudantium rem et praesentium quas est
							facere incidunt nihil at iusto earum, vitae impedit atque
							perspiciatis quod! Fugiat molestias maiores consectetur et aliquid
							laborum ipsum aperiam cumque, itaque perspiciatis aliquam iure ex,
							veritatis explicabo maxime nam tempore porro, veniam eaque
							cupiditate delectus excepturi facere vel! Dolores!
						</p>
						<Image path="general/post.jpeg" h={600} w={600} />
						<PosteInteraction />
					</div>
				</div>
			</div>
		</div>
	);
}
