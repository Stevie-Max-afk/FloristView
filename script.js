function showPopup(imageSrc, description) {
    const popupContainer = document.querySelector('.popup-container');
    const popupImage = document.querySelector('.popup-image');
    const popupDescription = document.querySelector('.popup-description');

    popupImage.src = imageSrc;
    popupImage.alt = description;
    popupDescription.textContent = description;

    popupContainer.style.opacity = '1';
    popupContainer.style.pointerEvents = 'auto';
  }

  function hidePopup() {
    const popupContainer = document.querySelector('.popup-container');
    popupContainer.style.opacity = '0';
    popupContainer.style.pointerEvents = 'none';
  }