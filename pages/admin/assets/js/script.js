  const navElem = document.querySelectorAll('.submenu');
  const authLogo = document.querySelectorAll('.nav__link_li');


  const openCloseMenu = () => {
    navElem.classList.toggle('nav__hidden');
  };

  authLogo.addEventListener('click', openCloseMenu);
