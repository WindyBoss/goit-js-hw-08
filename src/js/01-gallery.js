// Add imports above this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
import galleryTemplate from '../template/gallery-item';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = galleryTemplate(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox');


