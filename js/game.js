import $ from 'jquery'
import UI from './ui.js';

class Game {
  init () {
    $('.but_start_game').bind('click', this.runGame)
  }

  runGame () {
    UI.hideDialog();
    $('.but_start_game').unbind('click');
    console.log('start')
  }
}

export default Game