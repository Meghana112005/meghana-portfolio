(function () {
    emailjs.init("Tymn2G1BNmtZYhlX0"); // 🔑 CHANGE THIS
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send(
        "service_tz1idtf",      // ✅ already correct
        "template_x1mfezm",     // ✅ already correct
        {
            user_email: this.user_email.value, // 🔥 IMPORTANT
            message: this.message.value
        }
    ).then(
        function () {
            alert("Message sent successfully ✅");
            document.getElementById("contact-form").reset();
        },
        function (error) {
            console.error("EmailJS error:", error);
            alert("Failed to send message ❌");
        }
    );
});
