let editor = document.getElementById('editor');
let savedValue = localStorage.getItem('editorValue');
if (savedValue) {
  editor.value = savedValue;
}

editor.addEventListener('input', () => {
  localStorage.setItem('editorValue', editor.value)
});