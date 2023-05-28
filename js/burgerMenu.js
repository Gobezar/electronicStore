const toggleMenuButton = document.getElementById('toggleMenu');
const burgerItems = document.getElementById('burgerItems');
const closeIcon = document.getElementById('closeIcon');

toggleMenuButton.addEventListener('click', function() {
    burgerItems.classList.add('open');
});

closeIcon.addEventListener('click', function() {
    burgerItems.classList.remove('open');
});

// закрытие бургер меню при клике вне меню
window.addEventListener('click', function(event) {
    if (!burgerItems.contains(event.target) && event.target !== toggleMenuButton) {
        burgerItems.classList.remove('open');
    }
});