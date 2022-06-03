import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

createGalleryItem(galleryItems);
 
function createGalleryItem() {
    const markup = galleryItems.map(({ preview, original, description })=>
  `<div class="gallery__item">
      <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt='${description}'
      />
    </a>
  </div>`).join('');
    
  galleryRef.innerHTML = markup; 
};

galleryRef.addEventListener('click', onSelectedPicture);

let modalWindow;

function onSelectedPicture(event) {
    event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const largeImage = event.target.dataset.source; 
  modalWindow = basicLightbox.create(`<img src=${largeImage} width="800" height="600"> `, {
    onShow: () => window.addEventListener('keydown', closeModalOnEscKey),
    onClose: () => window.addEventListener('keydown', closeModalOnEscKey),
  });
  modalWindow.show();
};

function closeModalOnEscKey(event) {
  if (event.code === 'Escape') {
    modalWindow.close();
  }
};

