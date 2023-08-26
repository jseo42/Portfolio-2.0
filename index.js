window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const divWatch = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  })
});

const hiddenEl = document.querySelectorAll('.hidden');
hiddenEl.forEach((el) => divWatch.observe(el));

const text = document.querySelector('.logo-text p');
text.innerHTML = text.innerHTML.split("").map(
  (char, i) => 
  `<span style="transform:rotate(${i * 8 }deg)">${char}</span>`
).join('')

const toggleBtn = document.querySelector('.toggle-btn');
const navbarLinks = document.querySelector('.nav-links');
toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});
  


function createProjects() {
  const projectList = [
    {name:'Calculator', image:'', github:'https://github.com/jseo42/Calculator', live:'https://htmlpreview.github.io/?https://github.com/jseo42/Calculator/blob/main/index.html'},
    {name:'Pokedex', image:'', github:'', live:''},
    {name:'Library App', image:'', github:'', live:''},
  ]
}
