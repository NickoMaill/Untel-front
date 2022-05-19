import { useState } from "react";
import Modal from "./Modal";
import Instagram from "./Instagram";
import styles from "../styles/instaGrid.module.scss";
import "animate.css";

export default function InstaGrid({ posts }) {
	console.log(posts);
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
	console.log(visible, posts.edges.length);

	return (
		<div className={styles.mainContainer}>
			<div className={styles.instaLogoContainer}>
				<div className={styles.borderDesign}></div>
				<img className={styles.instaLogo} src="/svg/instaString.svg" alt="" />
			</div>
			<div className={styles.wrapper}>
				{posts.edges.slice(0, visible).map((post, i) => (
					<div className={`${styles.postContainer} animate__animated animate__backInUp`} key={i}>
						<div className={styles.photoContainer}>
							<div className={styles.videoContainer}>
								{post.node.is_video ? (
									<img className={styles.video} src="/svg/video.svg" alt="" />
								) : (
									<></>
								)}
							</div>
							<img
								className={styles.image}
								src={`https://scp2.elfsightcdn.com/?url=https://scontent-lhr8-2.cdninstagram.com/v/${formatUrl(
									post.node.thumbnail_resources[1].src
								)}`}
								alt={`photo post instagram n°${i + 1}`}
							/>
						</div>

						<div onClick={() => openCloseModal(post.node.shortcode)} className={styles.postInfoContainer}>
							<div className={styles.statsPosts}>
								{post.node.edge_media_preview_like.count > 0 ? (
									<div className={styles.statPost}>
										<img
											style={{ marginRight: "0.3rem" }}
											src="/svg/heart.svg"
											alt='icon mention "j"aime"'
										/>
										<span>{post.node.edge_media_preview_like.count}</span>
									</div>
								) : (
									<></>
								)}
								{post.node.edge_media_to_comment.count > 0 ? (
									<div className={styles.statPost}>
										<img
											style={{ marginRight: "0.3rem" }}
											src="/svg/chat.svg"
											alt="icon commentaire"
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
				<button className={styles.button} onClick={() => showMoreItem()}>
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
