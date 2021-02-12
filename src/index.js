import Game from "./game";
import "./styles/index.scss";

// document.addEventListener("DOMContentLoaded", () => {
//   const p = document.createElement("p");
//   p.innerText = "hellooooooo";
//   document.body.append(p);
//   debugger;
// });

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-screen");
  let ctx = canvas.getContext("2d");
  let lastTime = 0;
  let frames = 0;

  const GAME_WIDTH = 1400;
  const GAME_HEIGHT = 500;
  let game = new Game(GAME_WIDTH, GAME_HEIGHT);
  game.start();

  document.getElementById("end-turn-button").addEventListener("click", () => {
    game.hand.endTurn();
  });

  function gameLoop(timestamp) {
    let dt = timestamp - lastTime;
    lastTime = timestamp;

    game.update(dt);
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
    game.isOver();
  }

  requestAnimationFrame(gameLoop);
});
