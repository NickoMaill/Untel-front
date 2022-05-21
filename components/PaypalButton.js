import { useEffect, useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

export default function PaypalButton({ description, value, reference_id, albumId }) {
	const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
	const [paidFor, setPaidFor] = useState(false);
	const [error, setError] = useState(false);
	const [cancel, setCancel] = useState(false);
	const [success, setSuccess] = useState({});
	const handleApprove = (obj) => {
		setPaidFor(true);
	};

	const postOrderHistory = () => {
		fetch("http://localhost:8000/orders", {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: success.id,
				itemId: success.purchase_units[0].reference_id,
				nameItem: success.purchase_units[0].description,
				clientFirstName: success.payer.name.given_name,
				clientLastName: success.payer.name.surname,
				clientEmail: success.payer.email_address,
				city: success.payer.address.admin_area_2,
				country: success.payer.address.country_code,
				amount: success.purchase_units[0].amount.value,
				currency: success.purchase_units[0].amount.currency_code,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.success) {
					console.log("request accepted");
				} else {
					console.error("pas fontionné");
				}
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		if (paidFor) {
			// alert("merci pour votre achat");
		}

		if (error) {
			alert("an error happened", error);
		}
	}, [paidFor, error, cancel]);

	useEffect(() => {
		dispatch({
			type: "resetOptions",
			value: {
				...options,
				currency: "EUR",
			},
		});
	}, []);

	useEffect(() => {
		if (success.status === "COMPLETED") {
			postOrderHistory();
		}
	}, [success]);

	return (
		<PayPalButtons
			onClick={(data, actions) => {
				const hasAlreadyBougthCourse = false;

				if (hasAlreadyBougthCourse) {
					setError("Vous avez déjà acheter cet article");
					return actions.reject();
				} else {
					return actions.resolve();
				}
			}}
			createOrder={(data, actions) => {
				return actions.order.create({
					purchase_units: [
						{
							description,
							reference_id,
							amount: {
								value,
								currency_code: "EUR",
							},
						},
					],
				});
			}}
			onApprove={async (_data, actions) => {
				const order = await actions.order.capture();
				console.log("order", order);
				setPaidFor(true);
				setSuccess(order);
			}}
			onCancel={() => {
				setCancel(true);
			}}
			onError={(err) => {
				setError(true);
				console.error("PayPal checkout error", err);
			}}
		/>
	);
}
