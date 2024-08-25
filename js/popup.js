// fetch element
const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const popupImage = document.getElementById("popup-image");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const popupClose = document.getElementById("popup-close");

//popup open
function openPopup(card) {
  popupImage.src = card.getAttribute("data-image");
  popupTitle.innerHTML = card.getAttribute("data-title");
  popupDescription.innerHTML = card.getAttribute("data-description");
  popup.classList.add("active");
  overlay.classList.add("active");
}

// close pop
function closePopup() {
  popup.classList.remove("active");
  overlay.classList.remove("active");
}

// Add  cards
cards.forEach((card) => {
  card
    .querySelector(".card-button")
    .addEventListener("click", () => openPopup(card));
});

//  popup close button
popupClose.addEventListener("click", closePopup);

// overlay
overlay.addEventListener("click", closePopup);
