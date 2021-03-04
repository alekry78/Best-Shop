window.onload=function() {
    const ham = document.querySelector('.ham');
    const nav = document.querySelector('.ham-menu');
    const handleClick = () => {
        ham.classList.toggle('ham-active');
        nav.classList.toggle('menu-active');
    }
    ham.addEventListener('click', handleClick);
}
