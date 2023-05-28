function hideModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  localStorage.setItem("isModalVisible", false);
}


function hideBuyModal() {
  const buyMmodal = document.getElementById("buyModal");
  buyMmodal.classList.add("buyModalWindowHidden");
}


function buyProduct(event) {
  const form = document.querySelector(".modal__form");
  if (form.checkValidity()) {
    event.preventDefault();
    const quantityInput = document.getElementById("quantity");
    const colorInputs = document.getElementsByName("color");
    if (quantityInput.value && isColorSelected(colorInputs)) {
      hideModal();
      const buyMmodal = document.getElementById("buyModal");
      buyMmodal.classList.remove("buyModalWindowHidden");
      setTimeout(() => {
        hideBuyModal();
      }, 4000);
    }
  } else {
    form.reportValidity();
  }
}


function isColorSelected(colorInputs) {
  for (let i = 0; i < colorInputs.length; i++) {
    if (colorInputs[i].checked) {
      return true;
    }
  }
  return false;
}