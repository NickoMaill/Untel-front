import React from "react";

export default function Playlist({ src, className }) {
	return (
		<div className={className}>
			<iframe
				style={{ borderRadius: 12 }}
				src={src}
				width="100%"
				height="380"
				frameBorder="0"
				allowFullScreen={false}
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				title="spotify"
				loading="lazy"
				
			></iframe>
		</div>
	);
}
