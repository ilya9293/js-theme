import Theme from "../data/ref";

export const bodyRef = document.querySelector('body');
const toolBar = document.querySelector('.theme-switch__toggle');

toolBar.addEventListener('change', onChangeTheme);

function onChangeTheme() {
  bodyRef.classList.toggle(Theme.DARK);
  if (bodyRef.classList.contains(Theme.DARK)) {
    bodyRef.classList.remove(Theme.LIGHT);
    localStorage.setItem('currentTheme', Theme.DARK);
    //  localStorage.setItem('togle', true);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('currentTheme', Theme.LIGHT);
    //  localStorage.setItem('togle', false);
  }
}

const addCurrentTheme = () => {
  const currentTheme = localStorage.getItem('currentTheme');
  bodyRef.classList.add(currentTheme || Theme.LIGHT);
  //   const currentTogle = localStorage.getItem('togle');
  //   toolBar.checked = JSON.parse(currentTogle);
  toolBar.checked = !document.body.classList.contains(Theme.LIGHT);
};

addCurrentTheme();
