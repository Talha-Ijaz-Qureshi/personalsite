const blurboxDiv = document.getElementById('blurbox');
const logoimage = document.getElementById('mainLogo');
function hideBlurbox() {
    blurboxDiv.classList.toggle('hidden');
    logoimage.style.width = '10em';
    logoimage.style.transform='scale(1) translateY(0%)';
    blurboxDiv.style.backgroundColor= '#00000000';
}

setTimeout(hideBlurbox, 700);
setTimeout(() => {
    blurboxDiv.style.zIndex= "-100";
}, 1400);

const buttons = document.getElementsByClassName('themeButton');
const elements = document.querySelectorAll('body, h1, h2, h3, h4, h5, h6, p, div, a, img, footer'); // Add other elements here

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    const theme = 'theme' + (i + 1);
    applyTheme(theme, elements);
  });
}

function applyTheme(theme, elements) {
  elements.forEach((element) => {
    element.className = element.className.replace(/theme\d+/g, '');
    element.classList.add(theme);
  });
}
