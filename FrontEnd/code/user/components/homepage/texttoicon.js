document.addEventListener("DOMContentLoaded", () => {
    const leftNav = document.querySelector(".left-nav");
    const buttonMappings = [
        { id: "b1", text: "Request", icon: '<i class="fas fa-file-alt"></i>' },
        { id: "b5", text: "Track Request", icon: '<i class="fas fa-cloud"></i>' },
        { id: "b4", text: "History", icon: '<i class="fas fa-history"></i>' },
        { id: "b2", text: "Feedback", icon: '<i class="fas fa-comment"></i>' },
        { id: "b3", text: "Home", icon: '<i class="fas fa-house-user"></i>' },
        { id: "logout", text: "Logout", icon: '<i class="fas fa-sign-out"></i>' },
    ];

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            let isSmall = entry.contentRect.width < 170; // Adjust breakpoint as needed

            buttonMappings.forEach(({ id, text, icon }) => {
                const button = document.getElementById(id);
                if (button) {
                    button.innerHTML = isSmall ? icon : `${icon} ${text}`;
                    button.style.height="6vh";
                }
            });
            document.querySelector('.left-nav-open-close-button').style.display=isSmall?'none':'block';
            
        }
    });

    if (leftNav) {
        resizeObserver.observe(leftNav);
    }
});

