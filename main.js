var element = document.getElementById('content');

function dropdownStyles(e) {
  if (e.target.tagName.toUpperCase() !== 'SELECT') {
    return;
  }
  e.stopPropagation();
  element.style[e.target.id] = e.target.value;
}
document.body.addEventListener('change', dropdownStyles, false);