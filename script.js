const envelope = document.getElementById('envelope');
const closedImg = document.getElementById('closed-img');
const openImg = document.getElementById('open-img');
const loginForm = document.getElementById('login-form');  

envelope.addEventListener('click', () => {
    closedImg.style.opacity = '0';

    setTimeout(() => {
        openImg.style.opacity = '1';

        setTimeout(() => {
            envelope.classList.add('zoomed-in');
           
            loginForm.style.display = 'block'; 
        }, 1000);
    }, 1000);
});



// These are the hearts

document.addEventListener('DOMContentLoaded', function () {
  const heartsContainer = document.querySelector('.hearts');
  

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    
    const size = Math.random() * 15 + 20; 
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;


    heart.style.left = `${Math.random() * 100}%`;

 
    heartsContainer.appendChild(heart);

 
    setTimeout(() => {
      heart.remove();
    }, 5000);  
  }

  
  setInterval(createHeart, 500); 
});

//dropdown down here 

const dropBtn = document.querySelector(".dropbtn");
const dropContent = document.querySelector(".dropdown-content");

dropBtn.addEventListener("click", () => {
    dropContent.classList.toggle("show");
});

// This is menu
window.addEventListener("click", (e) => {
    if (!dropBtn.contains(e.target) && !dropContent.contains(e.target)) {
        dropContent.classList.remove("show");
    }
});

