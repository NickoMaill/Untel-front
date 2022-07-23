export const login = async (pass) => {
	return await fetch("http://localhost:8000/admin/login", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(pass),
	})
		.then((res) => res.json())
		.catch((err) => console.error(err));
};
