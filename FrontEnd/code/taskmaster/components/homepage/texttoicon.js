document.addEventListener("DOMContentLoaded", () => {
    const leftNav = document.querySelector(".left-nav");
    const buttonMappings = [
        { id: "b1", text: "Stastic", icon: '<i class="	fa fa-line-chart"></i>' },
        { id: "b5", text: "Task", icon: '<i class="fas fa-cloud"></i>' },
        { id: "b4", text: "History", icon: '<i class="fas fa-history"></i>' },
        { id: "b3", text: "Home", icon: '<i class="fas fa-house-user"></i>' },
        { id: "logout", text: "Logout", icon: '<i class="fas fa-sign-out"></i>' },
    ];

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            let isSmall = entry.contentRect.width < 150; // Adjust breakpoint as needed

            buttonMappings.forEach(({ id, text, icon }) => {
                const button = document.getElementById(id);
                if (button) {
                    button.innerHTML = isSmall ? icon : `${icon} ${text}`;
                    button.style.height="6vh";
                }
            });
            document.querySelector('.left-nav-open-close-button').style.display=isSmall?'none':'block';
            document.querySelector('.user-info-left-nav').style.marginTop=isSmall?'20px':'0px';
            
        }
    });

    if (leftNav) {
        resizeObserver.observe(leftNav);
    }
});

