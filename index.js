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

