document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar ul li a");
    const exploreButton = document.querySelector(".content button");

    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const href = this.getAttribute("href");
            if (href.startsWith("#")) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Explore button scrolls to #travel
    if (exploreButton) {
        exploreButton.addEventListener("click", function () {
            window.location.href = "#travel";
        });
    }

    // Booking form submission alerts
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const from = form.querySelector('input[placeholder="From"]')?.value;
            const to = form.querySelector('input[placeholder="To"]')?.value;
            const date = form.querySelector('input[type="date"]')?.value;
            const transportType = form.previousElementSibling?.textContent;

            if (from && to && date) {
                alert(`✅ ${transportType.trim()} booked from ${from} to ${to} on ${date}!`);
                form.reset();
            } else {
                alert("⚠️ Please fill in all fields!");
            }
        });
    });

    // Hotel "Book Now" alert
    const hotelButtons = document.querySelectorAll(".hotel-card a");

    hotelButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent navigation for now
            const hotelName = this.closest(".hotel-card").querySelector("h3").textContent;
            alert(`🏨 Booking request for: ${hotelName}`);
        });
    });
});
