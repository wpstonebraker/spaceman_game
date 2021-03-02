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
          e.preventDefault();
          if (player.game.gameState === 0) player.fire();
          if (player.game.gameState === 1) player.fire();

          break;
        default:
          break;
      }
    });

    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "w":
          if (player.speedY <= 0) player.stopY();
          break;
        case "s":
          if (player.speedY >= 0) player.stopY();
          break;
        case "a":
          if (player.speedX <= 0) player.stopX();
          break;
        case "d":
          if (player.speedX >= 0) player.stopX();
          break;
        case " ":
          break;
        default:
          break;
      }
    });
  }
}
