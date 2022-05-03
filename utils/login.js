export const login = async (pass) => {
	return await  fetch("http://localhost:8000/admin/login", {
		method: "POST",
		mode: "cors",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		credentials: "include",
		body: JSON.stringify(pass),
	})
		.then((res) => res.json())
		.catch((err) => {
			console.error(err);
		});
};
