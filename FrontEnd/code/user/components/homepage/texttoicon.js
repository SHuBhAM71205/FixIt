const loginPanel=document.querySelector('.user-info-left-nav');

const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        if (entry.contentRect.width < 400) {
            loginPanel.classList.add("small");
        } else {
            loginPanel.classList.remove("small");
        }
    }
});

resizeObserver.observe(loginPanel);