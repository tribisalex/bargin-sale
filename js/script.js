  const navElem = document.querySelector('.nav');
  const authLogo = document.querySelector('.auth-viz');

  const openCloseMenu = () => {
    navElem.classList.toggle('nav__hidden');
  };

  authLogo.addEventListener('click', openCloseMenu);
