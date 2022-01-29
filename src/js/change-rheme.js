const bodyRef = document.querySelector('body');
const toolBar = document.querySelector('.theme-switch__control');

toolBar.addEventListener('change', onChangeTheme);

function onChangeTheme() {
  bodyRef.classList.toggle('dark-theme');
}
