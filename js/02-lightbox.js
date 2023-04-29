import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const makeGallery = ({ preview, original, description }) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;

const markup = galleryItems.map((el) => makeGallery(el)).join("");

galleryList.insertAdjacentHTML("afterbegin", markup);

console.log(galleryList);

galleryList.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
