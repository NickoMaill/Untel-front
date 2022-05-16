import { useState, useRef } from "react";
import { img } from "react-lazy-load-image-component";
import styles from "../styles/PhotoGallery.module.scss";
import Modal from "./Modal";

export default function PhotoGallery() {
	const [isOpen, setIsOpen] = useState(false);
	const [currentPhoto, setCurrentPhoto] = useState("");
	const ref = useRef(null);

	const openCloseModal = (path) => {
		setIsOpen(!isOpen);
		setCurrentPhoto(path);
	};

	const scroll = (scrollOffset) => {
		ref.current.scrollLeft += scrollOffset;
	};

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<div className={styles.arrowContainer}>
				<div onClick={() => scroll(-500)} style={{ backgroundColor: "rgba(0,0,0,0.7)", padding: 10 }}>
					<img src="/svg/left.svg" alt="flèche gauche" />
				</div>
				<div onClick={() => scroll(500)} style={{ backgroundColor: "rgba(0,0,0,0.7)", padding: 10 }}>
					<img src="/svg/right.svg" alt="flèche droite" />
				</div>
			</div>
			<div className={styles.imgContainer} ref={ref}>
				<img
					loading="lazy"
					onClick={() => openCloseModal(ref.current.childNodes[0].src)}
					className={styles.img}
					src="/images/untel-band3.webp"
					alt="Untel"
				/>
				<img
					loading="lazy"
					onClick={() => openCloseModal(ref.current.childNodes[1].src)}
					className={styles.img}
					src="/images/untel-band4.webp"
					alt="Untel"
				/>
				<img
					loading="lazy"
					onClick={() => openCloseModal(ref.current.childNodes[2].src)}
					className={styles.img}
					src="/images/untel-favo.webp"
					alt="Untel"
				/>
				<img
					loading="lazy"
					onClick={() => openCloseModal(ref.current.childNodes[3].src)}
					className={styles.img}
					src="/images/untel-front1.webp"
					alt="Untel"
				/>
				<img
					loading="lazy"
					onClick={() => openCloseModal(ref.current.childNodes[4].src)}
					className={styles.img}
					src="/images/untel-front2.webp"
					alt="Untel"
				/>
				<img
					loading="lazy"
					onClick={() => openCloseModal(ref.current.childNodes[5].src)}
					className={styles.img}
					src="/images/untel.webp"
					alt="Untel"
				/>
			</div>
			<div>
				<Modal open={isOpen} onClick={openCloseModal}>
					<img className={styles.imgModal} src={currentPhoto} alt="photo de l'artiste Untel" />
				</Modal>
			</div>
		</div>
	);
}
