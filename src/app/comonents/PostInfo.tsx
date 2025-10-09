import React from "react";
import Image from "./Image";

export default function PostInfo() {
	return (
		<div className=" cursor-pointer relative w-4 h-4">
			<Image path="icons/infoMore.svg" alt="" h={16} w={16} />
		</div>
	);
}
