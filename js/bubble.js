import $ from 'jquery'

class Buble {
  constructor () {
    this.init()
  }

  init () {
    let bubble = $(document.createElement('span'));
    bubble.addClass('bubble');
    $('#game').append(bubble);
    bubble.on('click', function () {
      $(this).animate({'bottom': 100}, 100)
    })
  }
}

export default Buble