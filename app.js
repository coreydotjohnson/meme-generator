
const memePreview = document.querySelector('#meme-preview');
const memePreviewText = document.querySelector('#meme-preview-text');
const memePreviewImg = document.querySelector('#meme-preview-img');

const memeSettingsForm = document.querySelector('#meme-settings form');
const memeImgUrl = document.querySelector('#meme-img-url');
const memeImgHeight = document.querySelector('#meme-img-height');
const memeImgWidth = document.querySelector('#meme-img-width');
const memeText = document.querySelector('#meme-text');
const memeTextColor = document.querySelector('#meme-text-color');
const memeTextVertical = document.querySelector('#meme-text-vertical');
const memeTextHorizontal = document.querySelector('#meme-text-horizontal');
const memeTextSize = document.querySelector('#meme-text-size');

function makePreviewImg() {
    memePreviewImg.src = `${memeImgUrl.value}`;
    memePreviewImg.style.height = `${memeImgHeight.value}%`;
    memePreviewImg.style.width = `${memeImgWidth.value}%`;
    memePreviewText.textContent = memeText.value;
    memePreviewText.style.color = memeTextColor.value;
    memePreviewText.style.top = `${memeTextVertical.value}%`;
    memePreviewText.style.left = `${memeTextHorizontal.value *.50}%`;
    memePreviewText.style.fontSize = `${memeTextSize.value*.075}em`;
}

window.addEventListener('load', function(e) {
    makePreviewImg();
})

memeSettingsForm.addEventListener('input', function(e) {
    makePreviewImg();
})