import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/PhotoGallery.module.scss";
import Modal from "./Modal";
import Left from "../public/svg/left.svg";
import Right from "../public/svg/right.svg";

export default function PhotoGallery() {
	const [isOpen, setIsOpen] = useState(false);
	const [currentPhoto, setCurrentPhoto] = useState("");
	const [currentWidth, setCurrentWidth] = useState(null);
	const [currentHeight, setCurrentHeight] = useState(null);
	const ref = useRef(null);

	const openCloseModal = (path, width, height) => {
		setIsOpen(!isOpen);
		setCurrentPhoto(path);
		setCurrentWidth(width * 2);
		setCurrentHeight(height * 2);
	};

	const scroll = (scrollOffset) => {
		ref.current.scrollLeft += scrollOffset;
	};

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<div className={styles.arrowContainer}>
				<div onClick={() => scroll(-500)} className={styles.leftRightArrow}>
					<Left />
				</div>
				<div onClick={() => scroll(500)} className={styles.leftRightArrow}>
					<Right />
				</div>
			</div>
			<div className={styles.imgContainer} ref={ref}>
				<div className={styles.img}>
					<Image
						layout="fixed"
						loading="lazy"
						width={256}
						height={384}
						onClick={() =>
							openCloseModal(ref.current.childNodes[0].childNodes[0].childNodes[0].src, 256, 384)
						}
						src="/images/untel-band3.webp"
						alt="Untel"
						placeholder="blur"
						blurDataURL="https://search.brave.com/images?q=blur+white+%26+black+&source=web#6"
					/>
				</div>
				<div className={styles.img}>
					<Image
						layout="fixed"
						loading="lazy"
						width={576}
						height={384}
						onClick={() =>
							openCloseModal(ref.current.childNodes[1].childNodes[0].childNodes[0].src, 576, 384)
						}
						src="/images/untel-band4.webp"
						alt="Untel"
						placeholder="blur"
						blurDataURL="../public/images/blur.webp"
					/>
				</div>
				<div className={styles.img}>
					<Image
						layout="fixed"
						loading="lazy"
						width={255}
						height={384}
						onClick={() =>
							openCloseModal(ref.current.childNodes[2].childNodes[0].childNodes[0].src, 255, 384)
						}
						src="/images/untel-favo.webp"
						alt="Untel"
						placeholder="blur"
						blurDataURL="https://search.brave.com/images?q=blur+white+%26+black+&source=web#6"
					/>
				</div>
				<div className={styles.img}>
					<Image
						layout="fixed"
						loading="lazy"
						width={288}
						height={384}
						onClick={() =>
							openCloseModal(ref.current.childNodes[3].childNodes[0].childNodes[0].src, 288, 384)
						}
						src="/images/untel-front1.webp"
						alt="Untel"
						placeholder="blur"
						blurDataURL="https://search.brave.com/images?q=blur+white+%26+black+&source=web#6"
					/>
				</div>
				<div className={styles.img}>
					<Image
						layout="fixed"
						loading="lazy"
						width={384}
						height={384}
						onClick={() =>
							openCloseModal(ref.current.childNodes[4].childNodes[0].childNodes[0].src, 384, 384)
						}
						src="/images/untel-front2.webp"
						alt="Untel"
						placeholder="blur"
						blurDataURL="https://search.brave.com/images?q=blur+white+%26+black+&source=web#6"
					/>
				</div>
				<div className={styles.img}>
					<Image
						layout="fixed"
						loading="lazy"
						width={512}
						height={384}
						onClick={() =>
							openCloseModal(ref.current.childNodes[5].childNodes[0].childNodes[0].src, 512, 384)
						}
						src="/images/untel.webp"
						alt="Untel"
						placeholder="blur"
						blurDataURL="https://search.brave.com/images?q=blur+white+%26+black+&source=web#6"
					/>
				</div>
			</div>
			<div>
				<Modal open={isOpen} onClick={openCloseModal}>
					<div className={styles.imgModal}>
						<Image
							width={currentWidth}
							height={currentHeight}
							src={currentPhoto}
							alt="photo de l'artiste Untel"
							placeholder="blur"
							blurDataURL="https://search.brave.com/images?q=blur+white+%26+black+&source=web#6"
						/>
					</div>
				</Modal>
			</div>
		</div>
	);
}
