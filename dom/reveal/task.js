function isVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function onScroll() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    if (isVisible(el)) {
      el.classList.add('reveal_active');
    }
  });
}


window.addEventListener('scroll', onScroll);
window.addEventListener('DOMContentLoaded', onScroll);
