import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";

import styles from "../styles/PhotoGallery.module.scss";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

export default function PhotoGallery() {
	const [isVisible, setIsVisible] = useState(false);
	const [path, setPath] = useState("");

	const openCloseModal = (e) => {
		setPath(e.target.src);
		setIsVisible(!isVisible);
	};
    Modal.setAppElement("#__next")

	return (
		<>
			<div >
				<ul style={{ display: "flex", overflow: "scroll", marginTop: 10 }} >
					<li value="/images/untel-band3.webp" onClick={(e) => openCloseModal(e)}>
						<img className={styles.img} src="/images/untel-band3.webp" alt="" />
					</li>
					<li value="/images/untel-band4.webp" onClick={(e) => openCloseModal(e)}>
						<img className={styles.img} src="/images/untel-band4.webp" alt="" />
					</li>
					<li value="/images/untel-favo.webp" onClick={(e) => openCloseModal(e)}>
						<img className={styles.img} src="/images/untel-favo.webp" alt="" />
					</li>
					<li value="/images/untel-front1.webp" onClick={(e) => openCloseModal(e)}>
						<img className={styles.img} src="/images/untel-front1.webp" alt="" />
					</li>
					<li value="/images/untel-front2.webp" onClick={(e) => openCloseModal(e)}>
						<img className={styles.img} src="/images/untel-front2.webp" alt="" />
					</li>
				</ul>
			</div>
			<Modal isOpen={isVisible} onRequestClose={openCloseModal} style={customStyles}>
				<img className={styles.modalImg} src={path} alt="" />
			</Modal>
		</>
	);
}
