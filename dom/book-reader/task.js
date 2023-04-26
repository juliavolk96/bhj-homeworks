// const book = document.getElementById('book');
const fontSizeElems = document.querySelectorAll('.font-size');

fontSizeElems.forEach(function(fontSize) {
  fontSize.addEventListener('click', function(event) {
    event.preventDefault();
    const newFontSize = this.dataset.size;
    book.className = 'book';
    if (newFontSize === 'small') {
      book.classList.add('book_fs-small');
    } else if (newFontSize === 'big') {
      book.classList.add('book_fs-big');
    }

    fontSizeElems.forEach(function(size) {
      size.classList.remove('font-size_active');
    })

    this.classList.add('font-size_active');
  });
})
