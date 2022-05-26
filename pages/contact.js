import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useState } from "react";
import styles from "../styles/Contact.module.scss";

export default function Contact() {
	const router = useRouter();
	const { enqueueSnackbar } = useSnackbar();
	const [contactEmail, setContactEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [messageBody, setMessageBody] = useState("");
	const [isEmailValid, setIsEmailValid] = useState(null);
	const [messageSend, setMessageSend] = useState(false);
	const [_isSending, setIsSending] = useState(false);

	const mailRegex =
		/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

	const sendMessage = (e) => {
		e.preventDefault();
		setIsSending(true);
		fetch("http://localhost:8000/admin/send-email", {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({
				contactEmail,
				subject,
				messageBody,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				setIsSending(false);
				if (res.success) {
					setMessageSend(true);
					enqueueSnackbar("hello", {
						variant: "success",
					});
					setTimeout(() => {
						router.push("/");
					}, 2000);
				} else {
					enqueueSnackbar("hello", {
						variant: "error",
					});
				}
			})
			.catch((err) => console.error(err));
	};

	const verifyEmail = (input) => {
		if (input === "") {
			return setIsEmailValid(null);
		}

		if (!mailRegex.test(input)) {
			setIsEmailValid(false);
		} else {
			setIsEmailValid(true);
			setContactEmail(input);
		}
	};

	return (
		<main>
			<section>
				<div>
					{!messageSend ? (
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<div>
								<h1 style={{ fontFamily: "Roboto regular", textAlign: "center", marginTop: "2rem" }}>
									Contact
								</h1>
								<span>Un renseignement, une collab, un concert, ou une simple question ?</span>
							</div>
							<form onSubmit={(e) => sendMessage(e)} className={styles.form}>
								<h2 style={{ textAlign: "center" }}>Formulaire de contact</h2>
								<div style={{ marginBlock: 10, display: "flex", flexDirection: "column" }}>
									<label htmlFor="email">Email</label>
									<input
										className={
											isEmailValid !== null
												? isEmailValid
													? styles.goodEmail
													: styles.wrongEmail
												: styles.input
										}
										placeholder="exemple@mail.com"
										onBlur={(e) => verifyEmail(e.target.value)}
										name="email"
										type="text"
									/>
									{isEmailValid === false && (
										<span style={{ color: "rgb(243, 36, 36)" }}>mauvais format d&apos;email</span>
									)}
								</div>
								<div style={{ marginBlock: 10, display: "flex", flexDirection: "column" }}>
									<label htmlFor="subject">Sujet</label>
									<input
										className={styles.input}
										placeholder="Votre sujet de discussion"
										name="subject"
										onChange={(e) => setSubject(e.target.value)}
										type="text"
									/>
								</div>
								<div style={{ marginBlock: 10, display: "flex", flexDirection: "column" }}>
									<label htmlFor="messageBody">Votre message</label>
									<textarea
										className={styles.input}
										placeholder="Votre message ici ..."
										name="messageBody"
										style={{ fontFamily: "Roboto light" }}
										onChange={(e) => setMessageBody(e.target.value)}
										cols="30"
										rows="10"
									/>
								</div>
								<div style={{ display: "flex", justifyContent: "center" }}>
									<input
										className={styles.button}
										name="buttonSubmit"
										type="submit"
										value="envoyer votre message"
									/>
								</div>
							</form>
						</div>
					) : (
						<p>message envoyer</p>
					)}
				</div>
			</section>
		</main>
	);
}
