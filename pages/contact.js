import { useSnackbar } from "notistack";
import React, { useState, useEffect } from "react";
import styles from "../styles/Contact.module.scss";

export default function Contact() {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const [userMessage, setUserMessage] = useState({
		email: "",
		subject: "",
		messageBody: "",
	});
	const [isEmailValid, setIsEmailValid] = useState(null);
	const [messageSend, setMessageSend] = useState(false);
	const [isSending, setIsSending] = useState(false);

	const mailRegex =
		/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

	const sendMessage = () => {
		console.log(userMessage);
		setIsSending(true);
		fetch("http://localhost:8000/admin/send-email", {
			method: "POST",
			mode: "cors",
			headers: {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				credentials: "include",
			},
			body: JSON.stringify(userMessage),
		})
			.then((res) => {
				console.log(res);
				setIsSending(false);
				if (res.success) {
					setMessageSend(true);
					enqueueSnackbar("hello", {
						variant: "success",
					});
				} else {
					enqueueSnackbar("hello", {
						variant: "error",
					});
				}
			})
			.catch((err) => console.error(err));
	};

	const verifyEmail = (input) => {
		console.log(input);

		if (input === "") {
			return setIsEmailValid(null);
		}

		if (!mailRegex.test(input)) {
			setIsEmailValid(false);
			console.log("mauvais format");
		} else {
			setIsEmailValid(true);
			setUserMessage((prevState) => ({
				...prevState,
				email: input,
			}));
			console.log("bon format");
		}
	};

	return (
		<main>
			<section>
				<h2>Contact</h2>
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
							<p>Un renseignement, une collab, un concert, ou une simple question ?</p>
							<form className={styles.form}>
								<h4>Formulaire de contact</h4>
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
										<span style={{ color: "rgb(243, 36, 36)" }}>mauvais format d'email</span>
									)}
								</div>
								<div style={{ marginBlock: 10, display: "flex", flexDirection: "column" }}>
									<label htmlFor="subject">Sujet</label>
									<input
										className={styles.input}
										placeholder="Votre sujet de discussion"
										name="subject"
										onChange={(e) =>
											setUserMessage((prevState) => ({ ...prevState, subject: e.target.value }))
										}
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
										onChange={(e) =>
											setUserMessage((prevState) => ({
												...prevState,
												messageBody: e.target.value,
											}))
										}
										cols="30"
										rows="10"
									/>
								</div>
								<div style={{ display: "flex", justifyContent: "center" }}>
									<input
										className={styles.button}
										name="buttonSubmit"
										type="button"
										onClick={sendMessage}
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
