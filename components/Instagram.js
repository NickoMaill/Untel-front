import React from "react";

export default function Instagram({ src }) {
	return (
		<div>
			<iframe
				src={src}
				width="320"
				height="400"
				frameBorder="0"
				scrolling="no"
                title="instagram"
				allowtransparency="true"
			></iframe>
		</div>
	);
}
