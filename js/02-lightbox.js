import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

createGalleryItem(galleryItems);
 
function createGalleryItem() {
    const markup = galleryItems.map(({ preview, original, description })=>
        `<a class="gallery__item" 
        href=${original}>
        <img class="gallery__image"
            src=${preview}
            alt='${description}' />
        </a>`).join('');
    
  galleryRef.innerHTML = markup; 
};

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    // preloading: false,
    // alertError: false
    
});






