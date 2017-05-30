var element = document.getElementById('content');

function dropdownStyles(e) {
  if (e.target.tagName !== 'SELECT') {
    return;
  }
  element.style[e.target.id] = e.target.value;
}
document.body.addEventListener('change', dropdownStyles, false);