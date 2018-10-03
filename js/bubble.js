import $ from 'jquery'

class Bubble {
  constructor () {
    this.el = this.init();
  }

  init () {
    const bubble = $(document.createElement('span'));
    bubble.addClass('bubble');
    return bubble;
  }

  changePosition (x, y) {
    this._el.animate({'top': y, 'left': x})
  }

  get el () {
    return this._el
  }

  set el (el) {
    this._el = el;
  }
}

export default Bubble