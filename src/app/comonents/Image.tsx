"use client";
import React from "react";
import { IKImage } from "imagekitio-react";

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT as string;

type ImageType = {
	path: string; // obligatoire, c'est l'image à afficher
	w?: number;
	h?: number;
	className?: string;
	alt?: string;
	tr?: boolean;
};

export default function Image({ path, w, h, className, alt, tr }: ImageType) {
	return (
		<IKImage
			urlEndpoint={urlEndpoint}
			path={path} // ✅ on utilise la prop reçue
			alt={alt}
			className={className}
			{...(tr
				? { transformation: [{ width: w, height: h }] }
				: { width: w, height: h })}
		/>
	);
}
