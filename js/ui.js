import $ from 'jquery'

class UI {
  BUBBLE_DIMS = 44;

  hideDialog = () => {
    $('.dialog').fadeOut(300)
  }

  getMouseCoords = ({pageX, pageY}) => {
    return {x: pageX, y: pageY}
  }

  getBubbleCoords = (bubble) => {
    let bubbleCoords = bubble.position();
    bubbleCoords.left += this.BUBBLE_DIMS/2;
    bubbleCoords.top += this.BUBBLE_DIMS/2;
    return bubbleCoords;
  }

  getBubbleAngle = (bubble, e) => {
    const mouseCoords = this.getMouseCoords(e);
    const bubbleCoords = this.getBubbleCoords(bubble);
    const gameCoords = $('#game').position();
    const boardLeft = 120;
    let angle = Math.atan((mouseCoords.x - bubbleCoords.left - boardLeft) / (bubbleCoords.top + gameCoords.top - mouseCoords.y));
    if (mouseCoords.y > bubbleCoords.top + gameCoords.top) {
      angle += Math.PI;
    }
    return angle;
  }
}

export default UI