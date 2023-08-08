// © Manuel Matuzović: https://web.dev/website-navigation/



const nav = document.querySelector('nav');
const list = nav.querySelector('ul');
const burgerClone = document.querySelector('#burger-template').content.cloneNode(true);
const svg = nav.querySelector('svg');

const button = burgerClone.querySelector('button');
button.addEventListener('click', e => {
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isOpen);
});

// avoid DRY: disabling menu
const disableMenu = () => {
  button.setAttribute('aria-expanded', false);
};

//  close on escape
nav.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    disableMenu();
  }
});

// close if clicked outside of event target
document.addEventListener('click', e => {
  const isClickInsideElement = nav.contains(e.target);
  if (!isClickInsideElement) {
    disableMenu();
  }
});

nav.insertBefore(burgerClone, list);

function Gallery(gallery) {
   if (!gallery) {
    //  throw new Error("No Gallery Found!");
    return
   }

  // select the elements we need
  const images = Array.from(gallery.querySelectorAll("picture"));
  const modal = document.querySelector(".modal");
  const prevButton = modal.querySelector(".prev");
  const nextButton = modal.querySelector(".next");
  const closeButton = modal.querySelector(".close");
  let currentImage;

  function openModal() {
    // First check if the modal is already open
    if (modal.matches(".open")) {
      return; // stop the function from running
    }
    modal.classList.add("open");
    // Event listeners to be bound when we open the modal:
    window.addEventListener("keyup", handleKeyUp);
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPrevImage);
    closeButton.addEventListener("click", closeModal);
  }

  function closeModal() {
    modal.classList.remove("open");
    // removeImage();
    closeButton.removeEventListener("click", closeModal);
    window.removeEventListener("keyup", handleKeyUp);
    nextButton.removeEventListener("click", showNextImage);
    prevButton.removeEventListener("click", showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === "Escape") return closeModal();
    if (e.key === "ArrowRight") return showNextImage();
    if (e.key === "ArrowLeft") return showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }
  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(el) {
    if (!el) {
      console.info("no image to show");
      return;
    }
    // update the modal with this info
    let modalImage = el.outerHTML;
    modal.querySelector(".picture-div").innerHTML = modalImage;
    currentImage = el;
    openModal();
  }

  // These are our Event Listeners!
  images.forEach((image) => image.addEventListener("click", (e) => showImage(e.currentTarget)));

  // loop over each image
  images.forEach((image) => {
    // attach an event listener for each image
    image.addEventListener("keyup", (e) => {
      // when that is keyup'd, check if it was enter
      if (e.key === "Enter") {
        // if it was, show that image
        showImage(e.currentTarget);
      }
    });
  });

  modal.addEventListener("click", handleClickOutside);
}

const gallery = Gallery(document.querySelector(".declare-gallery"));

/*
const map = document.querySelector('.map__img'); 
let maplistner = function (e) { 
  console.log("hello")
    let frame = document.createElement ('iframe'); 
    frame.src = this.getAttribute ('data-src'); 
    map.appendChild (frame); 
    map.removeEventListener ("mouseover", maplistner); 
}; 

map.addEventListener('mouseover', maplistner);      
*/