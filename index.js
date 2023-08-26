window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const divWatch = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show')
    }
    
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
  


