import $ from 'jquery'
import UI from './ui.js';
import Buble from './bubble.js'

class Game {

  init () {
    $('.but_start_game').bind('click', () => this.runGame())
  }

  runGame () {
    UI.hideDialog();
    $('.but_start_game').unbind('click');
    new Buble();
  }
}

export default Game