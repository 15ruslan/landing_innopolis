
var menuItems = document.getElementsByClassName('feature-product__item');
var onClick = function(event) {
  event.preventDefault();

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('active');
  }

  event.currentTarget.classList.add('active');
};

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', onClick, false);
}
