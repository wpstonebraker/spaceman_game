import Player from "./player";

export default class InputHandler {
  constructor(player) {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "w":
          player.moveUp();
          break;
        case "s":
          player.moveDown();
          break;
        case "a":
          player.moveLeft();
          break;
        case "d":
          player.moveRight();
          break;
        case " ":
          player.fire();
          break;
        default:
          break;
      }
    });

    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "w":
          player.stop();
          break;
        case "s":
          player.stop();
          break;
        case "a":
          player.stop();
          break;
        case "d":
          player.stop();
          break;
        case " ":
          break;
        default:
          break;
      }
    });
  }
}
