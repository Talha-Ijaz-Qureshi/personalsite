const blurboxDiv = document.getElementById('blurbox');
const logoimage = document.getElementById('mainLogo')
function hideBlurbox() {
    blurboxDiv.classList.toggle('hidden')
    logoimage.style.width = '10em';
}

setTimeout(hideBlurbox, 500);
setTimeout(() => {
    blurboxDiv.style.zIndex = "-100";
}, 1000);
