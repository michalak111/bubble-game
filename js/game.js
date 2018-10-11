import $ from 'jquery'
import UI from './ui.js';
import Bubble from './bubble.js'

class Game {
  currentBubble = null;
  UI = new UI();

  init () {
    $('.but_start_game').bind('click', () => this.startGame())
  }

  startGame () {
    $('.but_start_game').unbind('click');
    this.UI.hideDialog();
    this.currentBubble = this.getNextBubble();
    $('#game').bind("click", (e) => this.clickGameScreen(e));
  }

  getNextBubble () {
    const bubble = new Bubble();
    bubble.setCurrent();
    $('#board').append(bubble.el);
    return bubble;
  }

  clickGameScreen (e) {
    const angle = this.UI.getBubbleAngle(this.currentBubble.el, e);
  }
}

export default Game