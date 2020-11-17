window.onload=function() {
    const ham = document.querySelector('.ham');
    const nav = document.querySelector('.nav-head');
    const handleClick = () => {
        ham.classList.toggle('ham-active');
        nav.classList.toggle('nav-head-active');
    }
    ham.addEventListener('click', handleClick);
}
