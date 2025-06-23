const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});


const section = document.querySelector('#projects');

window.addEventListener('scroll', () => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionTop < screenPosition) {
        section.classList.add('reveal');
    }
});
