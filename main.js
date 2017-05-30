var element = document.getElementById('content');

function dropdownStyles(e) {
  if (e.target.tagName.toLowerCase() !== 'select') {
    return;
  }
  e.stopPropagation();
  element.style[e.target.id] = e.target.value;
}
document.body.addEventListener('change', dropdownStyles, false);