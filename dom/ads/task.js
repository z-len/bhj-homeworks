function startRotator(rotator) {
  const cases = rotator.querySelectorAll('.rotator__case');
  let index = 0;

  function rotate() {
    // Текущий и следующий элементы
    const current = cases[index];
    current.classList.remove('rotator__case_active');

    // Вычисляем следующий индекс
    index = (index + 1) % cases.length;
    const next = cases[index];

    // Применяем новый стиль и класс
    next.classList.add('rotator__case_active');
    next.style.color = next.dataset.color || 'black';

    // Устанавливаем таймер для следующей итерации
    const delay = next.dataset.speed ? parseInt(next.dataset.speed) : 1000;
    setTimeout(rotate, delay);
  }

  // Применяем начальные стили
  const first = cases[index];
  first.style.color = first.dataset.color || 'black';
  const delay = first.dataset.speed ? parseInt(first.dataset.speed) : 1000;
  setTimeout(rotate, delay);
}

// Запускаем для всех ротаторов на странице
document.addEventListener('DOMContentLoaded', () => {
  const rotators = document.querySelectorAll('.rotator');
  rotators.forEach(startRotator);
});
