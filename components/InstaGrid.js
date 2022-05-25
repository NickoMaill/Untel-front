import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import Instagram from "./Instagram";
import styles from "../styles/Home.module.scss";
import "animate.css";

export default function InstaGrid({ posts }) {
	const [visible, setVisible] = useState(10);
	const [isOpen, setIsOpen] = useState(false);
	const [currentPost, setCurrentPost] = useState("");
	const [endOfPost, setEndOfPost] = useState(false);

	const openCloseModal = (post) => {
		setIsOpen(!isOpen);
		setCurrentPost(post);
	};

	const showMoreItem = () => {
		if (visible === posts.edges.length) {
			setVisible((pervState) => pervState + 0);
			setEndOfPost(true);
		} else {
			setVisible((pervState) => pervState + 5);
		}
	};

	const formatUrl = (string) => {
		const formatDescription = [string].map((i) => i.replace(/&/g, "%26")).join("");
		const slicedString = formatDescription.substring(43);
		return slicedString;
	};

	return (
		<div className={styles.gridContainer}>
			<div className={styles.instaLogoContainer}>
				<div className={styles.borderDesign}></div>
				<div className={styles.instaLogo}>
					<Image height={114} width={320} src="/svg/instaString.svg" alt="" />
				</div>
			</div>
			<div className={styles.wrapper}>
				{posts.edges.slice(0, visible).map((post, i) => (
					<div className={`${styles.postContainer} animate__animated animate__backInUp`} key={i}>
						<div className={styles.photoContainer}>
							<div className={styles.videoContainer}>
								{post.node.is_video ? (
									<Image
										loading="lazy"
										width={24.003}
										height={17.772}
										className={styles.video}
										src="/svg/video.svg"
										alt=""
										placeholder="empty"
									/>
								) : (
									<></>
								)}
							</div>
							<Image
								loading="lazy"
								className={styles.postImage}
								width={240}
								height={240}
								src={`https://scp2.elfsightcdn.com/?url=https://scontent-lhr8-2.cdninstagram.com/v/${formatUrl(
									post.node.thumbnail_resources[1].src
								)}`}
								alt={`photo post instagram n°${i + 1}`}
								placeholder="blur"
								blurDataURL="https://search.brave.com/images?q=blur+white+%26+black+&source=web#6"
							/>
						</div>

						<div onClick={() => openCloseModal(post.node.shortcode)} className={styles.postInfoContainer}>
							<div className={styles.statsPosts}>
								{post.node.edge_media_preview_like.count > 0 ? (
									<div className={styles.statPost}>
										<Image
											loading="lazy"
											width={24.003}
											height={17.772}
											style={{ marginRight: "0.3rem" }}
											src="/svg/heart.svg"
											alt='icon mention "j"aime"'
											placeholder="empty"
										/>
										<span>{post.node.edge_media_preview_like.count}</span>
									</div>
								) : (
									<></>
								)}
								{post.node.edge_media_to_comment.count > 0 ? (
									<div className={styles.statPost}>
										<Image
											loading="lazy"
											width={24.003}
											height={17.772}
											style={{ marginRight: "0.3rem" }}
											src="/svg/chat.svg"
											alt="icon commentaire"
											placeholder="empty"
										/>
										<span>{post.node.edge_media_to_comment.count}</span>
									</div>
								) : (
									<></>
								)}
							</div>
							{post.node.edge_media_to_caption.edges.length > 0 && (
								<p className={styles.postDetails}>
									{post.node.edge_media_to_caption.edges[0].node.text.substring(0, 50)}...
								</p>
							)}
						</div>
					</div>
				))}
			</div>
			<div className={styles.buttonContainer}>
				<button className={styles.morePostButton} onClick={() => showMoreItem()}>
					Afficher plus de posts
				</button>
				{endOfPost && (
					<div className={styles.endMEssage}>
						<span style={{ fontStyle: "italic" }}>
							- Tout continue au-delà de l&apos;horizon (mais pas sur cette liste !) -
						</span>
					</div>
				)}
			</div>
			<Modal open={isOpen} onClick={openCloseModal}>
				<Instagram postId={currentPost} />
			</Modal>
		</div>
	);
}
