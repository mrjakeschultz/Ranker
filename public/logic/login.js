function addEventListeners() {
	document.querySelector("#login-form").addEventListener("submit", (event) => {
		event.preventDefault();
		const email = document.querySelector("#email").value;
		const password = document.querySelector("#password").value;

		fetch("/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					// If the login was successful, redirect the user to the home page
					console.log("Login successful");
					window.location.replace("/api/games");
				} else {
					// If the login was unsuccessful, show an error message
					console.log("Login unsuccessful");
					document.querySelector("#error-message").textContent = data.message;
				}
			});
	});
}

document.addEventListener("DOMContentLoaded", addEventListeners);
