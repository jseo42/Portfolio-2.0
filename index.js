window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});


const text = document.querySelector('.logo-text p');
text.innerHTML = text.innerHTML.split("").map(
  (char, i) => 
  `<span style="transform:rotate(${i * 9.0 }deg)">${char}</span>`
).join('')

const toggleBtn = document.querySelector('.toggle-btn');
const navbarLinks = document.querySelector('.nav-links');
toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});
  


