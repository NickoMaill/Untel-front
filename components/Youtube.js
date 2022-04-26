import React from "react";

export default function Youtube(props) {
	return (
		<div>
			<iframe
				className={props.className}
				width="560"
				height="315"
				src={props.src}
				title={props.title}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
}
