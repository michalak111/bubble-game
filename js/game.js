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
    $('#game').on('click', (e) => {
      const {offsetX, offsetY} = e
      this.currentBubble.changePosition(offsetX - 10, offsetY - 10)
    })
  }

  getNewBubble () {
    const bubble = new Bubble();
    $('#game').append(bubble.el);
    return bubble;
  }
}

export default Game