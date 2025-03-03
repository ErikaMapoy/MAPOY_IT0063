let activeBoxes = [];

function showBox(day) {
    const colors = {
        Monday: '#F09EA7', 
        Tuesday: '#F6CA94', 
        Wednesday: '#FAFABE', 
        Thursday: '#C1EBC0', 
        Friday: '#C7CAFF', 
        Saturday: '#CDABEB', 
        Sunday: '#F6C2F3'  
    };
    
    activeBoxes.forEach(box => {
        box.style.top = '-650px'; 
        setTimeout(() => {
            box.remove(); 
        }, 1000);
    });
    
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.style.backgroundColor = colors[day] || 'gray';
    newBox.style.borderColor = colors[day] || 'gray';
    newBox.style.top = '-500px'; 
    
    document.querySelector('.box-container').appendChild(newBox);
    
    setTimeout(() => {
        newBox.style.top = '50px'; 
    }, 100);
    
    setTimeout(() => {
        newBox.style.backgroundColor = 'white';
    }, 1000);
    
    activeBoxes = [newBox];
}