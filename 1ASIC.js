document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling with a custom easing effect
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = Math.min(1000, Math.abs(distance) / 2); // Max duration of 1 second
            let startTime = null;

            // Easing function for smooth scrolling
            const easeInOutQuad = (t) => {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            };

            function animation(currentTime) {
                if (!startTime) startTime = currentTime; // Set start time
                const timeElapsed = currentTime - startTime; // Calculate elapsed time
                const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1

                const ease = easeInOutQuad(progress); // Apply easing
                const scrollY = startPosition + distance * ease; // Calculate new scroll position

                window.scrollTo(0, scrollY); // Scroll to new position

                if (progress < 1) {
                    requestAnimationFrame(animation); // Continue animation until completion
                }
            }

            // Immediately scroll to the target position to avoid any pause
            window.scrollTo(0, targetPosition);
            requestAnimationFrame(animation); // Start the animation
        });
    });
});
