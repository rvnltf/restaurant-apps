const DrawerInitiator = {
  init({
    button, drawer, content, appBar,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, appBar);
      //   drawer.classList.toggle('open');
      //   this.classList.toggle('header');
      //   event.stopPropagation();
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, appBar);
    });
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
