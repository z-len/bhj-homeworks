const book = document.getElementById('book');
const fontSizeControls = document.querySelectorAll('.font-size');

fontSizeControls.forEach(control => {
  control.addEventListener('click', event => {
    event.preventDefault();

    // Удаляем активный класс у всех элементов
    fontSizeControls.forEach(c => c.classList.remove('font-size_active'));

    // Добавляем активный класс к нажатому элементу
    control.classList.add('font-size_active');

    // Удаляем текущие классы размера шрифта
    book.classList.remove('book_fs-small', 'book_fs-big');

    // Получаем значение размера из data-атрибута
    const size = control.dataset.size;

    // Применяем соответствующий класс, если есть
    if (size === 'small') {
      book.classList.add('book_fs-small');
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    }
    // если нет size — значит это стандартный размер, класс не добавляется
  });
});
