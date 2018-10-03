import $ from 'jquery'
import UI from './ui.js';
import Bubble from './bubble.js'

class Game {
  currentBubble = null;

  init () {
    $('.but_start_game').bind('click', () => this.runGame())
  }

  runGame () {
    UI.hideDialog();
    $('.but_start_game').unbind('click');
    this.currentBubble = this.getNewBubble();
    $('#board').on('click', (e) => {
      const {offsetX, offsetY} = e
      this.currentBubble.changePosition(offsetX - 25, offsetY - 25)
    })
  }

  getNewBubble () {
    const bubble = new Bubble();
    bubble.el.addClass('bubble--current')
    $('#board').append(bubble.el);
    return bubble;
  }
}

export default Game