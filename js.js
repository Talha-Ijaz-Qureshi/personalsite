const blurboxDiv = document.getElementById('blurbox');
const logoimage = document.getElementById('mainLogo')
function hideBlurbox() {
    blurboxDiv.classList.toggle('hidden')
    logoimage.style.width = '10em';
    logoimage.style.transform='scale(1) translateY(0%)';
    blurboxDiv.style.backgroundColor= '#00000000';
}

setTimeout(hideBlurbox, 500);
setTimeout(() => {
    blurboxDiv.style.zIndex= "-100";

}, 1000);
