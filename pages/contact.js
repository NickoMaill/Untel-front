import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import Error from "../components/Error";
import Success from "../components/Success";

export default function Contact() {
	const { enqueueSnackbar } = useSnackbar();
	const [contactEmail, setContactEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [messageBody, setMessageBody] = useState("");
	const [isEmailValid, setIsEmailValid] = useState(null);
	const [messageSend, setMessageSend] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const [error, setError] = useState(false);
	console.log(isSending);

	const mailRegex =
		/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

	const sendMessage = (e) => {
		e.preventDefault();
		setIsSending(true);
		fetch("http://localhost:8000/admin/send-email", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				contactEmail,
				subject,
				messageBody,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				if (res.success) {
					setMessageSend(true);
					enqueueSnackbar("message envoyé !", {
						variant: "success",
					});
				} else {
					setError(true);
					enqueueSnackbar("une erreur est survenue...", {
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
					{!isSending ? (
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
							<ContactForm
								onSubmit={(e) => sendMessage(e)}
								onBlur={(e) => verifyEmail(e.target.value)}
								isEmailValid={isEmailValid}
								onChangeSubject={(e) => setSubject(e.target.value)}
								onChangeBody={(e) => setMessageBody(e.target.value)}
							/>
						</div>
					) : (
						error ? (
							<Error title="Une erreur est survenue...">Une erreur est survenue lors de l'envoi de votre email, veuillez recommencer. Si le problème persiste, contacter notre service de maintenance à <a style={{ fontStyle: "italic", color: "blue" }} target="blank" rel="noreferrer" href="mailto:untel.officiel@outlook.com"><strong>untel.officiel@outlook.com</strong></a></Error>
						) : (
							<Success title="Message envoyé !">Merci pour votre message vous une réponse très prochainement, surveillez vos spams (au cas où !) !</Success>
						)
					) 
					}
				</div>
			</section>
		</main>
	);
}
