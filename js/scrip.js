const nav = document.querySelector('.nav');
const navenone = document.querySelector('.navenone');
const naveactive = document.querySelector('.naveacrive');


naveactive.onclick = () => {
    nav.classList.toggle('active')
}
navenone.onclick = () => {
    nav.classList.remove('active')
}



document.addEventListener('DOMContentLoaded', () => {
    const testimoniosContain = document.querySelector('.testimonios-contain');
    const contentBoxes = document.querySelectorAll('.contant-box');
    const dots = document.querySelectorAll('.dot span');

    
    const totalBoxes = contentBoxes.length;

    if (totalBoxes === 0) {
        console.error("No content boxes available to scroll!");
        return;
    }

    // Ensure only matching dots are functional
    dots.forEach((dot, index) => {
        if (index < totalBoxes) {
            
            dot.addEventListener('click', () => {
                testimoniosContain.scrollLeft = index * (contentBoxes[0].clientWidth + 10);
                dots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        } else {
            dot.style.display = 'none';
        }
    });

    
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalBoxes;
        testimoniosContain.scrollLeft = currentIndex * (contentBoxes[0].clientWidth + 10);
        dots.forEach(d => d.classList.remove('active'));
        if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }, 3000); 
});


    
const sacateBoxes = document.querySelectorAll('.sacate-box');
const sacateQuestions = document.querySelectorAll('.sacate-qustion');
const icons = document.querySelectorAll('.sacate-box i');

sacateBoxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        const question = sacateQuestions[index]; 
        const icon = icons[index]; 

        
        if (question.style.height === 'auto') {
            question.style.height = '0';
            icon.style.transform = 'rotate(0deg)';
        } else {
            question.style.height = 'auto';
            icon.style.transform = 'rotate(180deg)'; 
        }
    });
});








