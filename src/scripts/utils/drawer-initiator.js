const DrawerInitiator = {
  init({
    button, drawer, content, appBar, detailButton,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, appBar);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, appBar);
    });

    window.addEventListener('scroll', () => {
      appBar.classList.toggle('sticky', window.scrollY > 200);
    });

    // detailButton.addEventListener('click', () => {
    //   appBar.classList.toggle('sticky');
    // });
  },

  _toggleDrawer(event, drawer, appBar) {
    drawer.classList.toggle('open');
    appBar.classList.toggle('header');
    event.stopPropagation();
  },

  _closeDrawer(event, drawer, appBar) {
    drawer.classList.remove('open');
    appBar.classList.toggle('header');
    event.stopPropagation();
  },
};

export default DrawerInitiator;
