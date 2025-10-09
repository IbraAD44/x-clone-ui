"use client";

import Image from "./comonents/Image";
import Feed from "./comonents/Feed";
import Share from "./comonents/Share";
import Link from "next/link";
const Homepage = () => {
	return (
		<div className="">
			<div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
				<Link
					className="pb-3 flex itmes-centre border-b-4 border-iconBlue "
					href="/"
				>
					For share
				</Link>
				<Link className=" pb-3  flex itmes-centre  " href="/">
					Following{" "}
				</Link>
				<Link className="hidden pb-3 md:flex itmes-centre   " href="/">
					Reac.js
				</Link>
				<Link className="hidden pb-3 md:flex itmes-centre  " href="/">
					JavaScripe
				</Link>
				<Link className="hidden pb-3 md:flex  itmes-centre  " href="/">
					CSS
				</Link>
			</div>
			<Share />
			<Feed />
		</div>
	);
};

export default Homepage;
