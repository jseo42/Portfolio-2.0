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
  
const links = document.querySelectorAll('#medium-link');
const divs = document.querySelectorAll('.animate-div');

links.forEach((link, index) => {
  link.addEventListener('mouseenter', () => {
    divs[index].style.transform = 'translateX(30%) rotate(-15deg)';

  });
  link.addEventListener('mouseleave', () => {
    divs[index].style.transform = 'translateX(100%) rotate(0)'
  });
});