
const tabContainers = document.querySelectorAll('.tab__navigation');

tabContainers.forEach(container => {
  const tabs = Array.from(container.querySelectorAll('.tab'));
  const contents = Array.from(container.nextElementSibling.querySelectorAll('.tab__content'));

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      
      tabs.forEach(t => t.classList.remove('tab_active'));
      contents.forEach(c => c.classList.remove('tab__content_active'));

     
      tab.classList.add('tab_active');
      contents[index].classList.add('tab__content_active');
    });
  });
});
