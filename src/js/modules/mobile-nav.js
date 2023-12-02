function mobileNav() {
  const burgerBtn = document.querySelector(".x-burger"),
    mobileHeader = document.querySelector(".header--MOBILE"),
    mobileMenu = mobileHeader.querySelector("nav"),
    outsideMenu = mobileHeader.querySelector(".header-decor"),
    menuBtn = mobileHeader.querySelector(".btn"),
    headerLinks = document.querySelectorAll('.menu__link');

  burgerBtn.onclick = () => {
    burgerBtn.classList.toggle("is-Active");
    burgerBtn.classList.contains("is-Active") ? openMenu() : closeMenu();
  };

  outsideMenu.onclick = () => closeMenu();

  menuBtn.onclick = (e) => closeMenu();

  headerLinks.forEach(el => {
    el.onclick = () => closeMenu()
  })

  function openMenu() {
    mobileMenu.classList.add("is-Open");
    mobileHeader.classList.add("menu-Open");
    document.body.classList.add("no-scroll");
  }

  function closeMenu() {
    mobileMenu.classList.remove("is-Open");
    mobileHeader.classList.remove("menu-Open");
    burgerBtn.classList.remove("is-Active");
    document.body.classList.remove("no-scroll");
  }
}

export default mobileNav;
