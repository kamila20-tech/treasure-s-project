// Handle form submission
document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();

    // Display a simple confirmation message
    showMessage("Thank you for your message! I'll get back to you soon.");

    // Reset the form
    event.target.reset();
});

/**
 * Displays a confirmation message.
 * @param {string} message - The message to display.
 */
const showMessage = (message) => {
    const messageBox = document.createElement("div");
    messageBox.textContent = message;
    messageBox.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #2575fc;
        color: #fff;
        padding: 10px 20px;
        border-radius: 8px;
        font-family: 'Poppins', sans-serif;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        animation: fadeInOut 3s ease-in-out;
    `;
    document.body.appendChild(messageBox);

    // Remove the message after animation
    messageBox.addEventListener("animationend", () => messageBox.remove());
};

// Add fade-in-out animation styles
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(20px); }
        20%, 80% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(20px); }
    }
`;
document.head.appendChild(style);
