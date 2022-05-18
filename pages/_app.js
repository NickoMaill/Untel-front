import { useState } from "react";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AppContext from "../context/state";

import "../styles/globals.scss";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function MyApp({ Component, pageProps }) {

	

	const value = {
	};

	return (
		<PayPalScriptProvider options={{ "client-id": process.env.CLIENT_ID }}>
			<SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }} maxSnack={3}>
				<AppContext.Provider value={value}>
					<Head>
						<title>Untel Officiel</title>
					</Head>
					<Header />
					<Component {...pageProps} />
					<Footer />
				</AppContext.Provider>
			</SnackbarProvider>
		</PayPalScriptProvider>
	);
}

export default MyApp;
