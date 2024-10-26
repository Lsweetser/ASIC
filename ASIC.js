document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling with extended easing effect
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            let start = null;
            const duration = 1000; // 1-second scroll duration

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;

                const targetPosition = targetElement.offsetTop;
                const scrollPosition = window.pageYOffset;
                const distance = targetPosition - scrollPosition - 70; // 70px offset for fixed navbar

                const ease = (t) => t * (2 - t); // Easing function

                window.scrollTo(0, scrollPosition + distance * ease(progress / duration));

                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            }

            window.requestAnimationFrame(step);
        });
    });
});