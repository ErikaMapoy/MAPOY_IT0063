
function changeColor() {
    const resume = document.querySelector('.resume');
    resume.classList.toggle('colorful'); 


    const button = document.getElementById('colorButton');
    button.textContent = resume.classList.contains('colorful') 
        ? 'PRESS ME TO REVERT COLORS' 
        : 'PRESS ME TO ADD COLORS';
}


