// get all expandable image elements
const images = document.querySelectorAll('.expandable-image');
const darkOverlay = document.querySelector('.dark-overlay');

images.forEach((element) => {
  element.addEventListener('click', expandImage);
})

darkOverlay.addEventListener('click', closeImage);

// the code to expand images with better resolution
function expandImage(e) {
  const src = e.target.src;
  darkOverlay.style.display = 'flex'
  darkOverlay.insertAdjacentHTML('afterbegin', `<img src="${src}"/>`);
}

// close image after overlay was clicked
function closeImage(e) {

  if( e.target.tagName === 'IMG' ) {
    return;
  }

  darkOverlay.innerHTML = '';
  darkOverlay.style.display = 'none';
}