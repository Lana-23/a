document.addEventListener('DOMContentLoaded', () => {
    const mainScreen = document.getElementById('main-screen');
    const divinationScreen = document.getElementById('divination-screen');
    const backButton = document.getElementById('back-button');
    const navContainer = document.querySelector('#all-divinations nav');
    const divinationContent = document.getElementById('divination-content');

    const showDivination = (target) => {
        // Hide all divination contents
        const allContents = divinationContent.querySelectorAll('[data-divination]');
        allContents.forEach(content => content.style.display = 'none');

        // Show the target divination content
        const targetContent = divinationContent.querySelector(`[data-divination="${target}"]`);
        if (targetContent) {
            targetContent.style.display = 'block';
        }

        // Switch screens
        mainScreen.style.display = 'none';
        mainScreen.classList.remove('active');
        divinationScreen.style.display = 'block';
        divinationScreen.classList.add('active');
    };

    const showMainMenu = () => {
        divinationScreen.style.display = 'none';
        divinationScreen.classList.remove('active');
        mainScreen.style.display = 'block';
        mainScreen.classList.add('active');
    };

    // Use event delegation for nav buttons
    if (navContainer) {
        navContainer.addEventListener('click', (e) => {
            const button = e.target.closest('.nav-btn');
            if (button && button.dataset.target) {
                showDivination(button.dataset.target);
            }
        });
    }

    if (backButton) {
        backButton.addEventListener('click', showMainMenu);
    }
});
