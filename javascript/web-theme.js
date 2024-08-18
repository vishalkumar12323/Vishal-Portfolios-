const button = document.querySelector(".theme-button");
const heroSection = document.querySelector(".hero-section");
const footerSection = document.querySelector(".footer-section");
const sectionTitle = document.querySelectorAll(".section-title h2");

export function themeToggler() {
    let theme = localStorage.getItem('web-theme') || 'dark';
    document.body.classList.add(theme);
    button.innerHTML = theme === "dark" ? `<ion-icon name="moon-outline" size="large"></ion-icon>` : `<ion-icon name="sunny-outline" size="large"></ion-icon>`;

    heroSection.style.backgroundColor = theme === 'dark' ? '#020202' : '#f5f6fa';
    footerSection.style.backgroundColor = theme === 'dark' ? '#020202' : '#f5f6fa';
    sectionTitle.forEach((ele) => ele.style.color = theme === 'dark' ? '#fff' : '#000');
    button.addEventListener('click', () => {
        if (theme === "dark") {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            button.innerHTML = `<ion-icon name="sunny-outline" size="large"></ion-icon>`
            localStorage.setItem("web-theme", 'light');
            heroSection.style.backgroundColor = '#f5f6fa'
            footerSection.style.backgroundColor = '#f5f6fa'
            sectionTitle.forEach((ele) => ele.style.color = '#000');
            theme = 'light';
        } else {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            button.innerHTML = `<ion-icon name="moon-outline" size="large"></ion-icon>`
            heroSection.style.backgroundColor = '#020202'
            footerSection.style.backgroundColor = '#020202'
            sectionTitle.forEach((ele) => ele.style.color = '#fff');
            localStorage.setItem("web-theme", 'dark');
            theme = 'dark';
        }
    });
};