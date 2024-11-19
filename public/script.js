document.getElementById("contactForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the page from refreshing

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const data = { name, email, message };

    try {
        const response = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Form submitted successfully!");
        } else {
            alert("Failed to submit the form.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while submitting the form.");
    }
});
