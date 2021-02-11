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

  const GAME_WIDTH = 1400;
  const GAME_HEIGHT = 500;

  let game = new Game(GAME_WIDTH, GAME_HEIGHT);
  game.start();

  document.getElementById("end-turn-button").addEventListener("click", () => {
    game.hand.endTurn();
  });
  // ctx.clearRect(0, 0, 1400, 800);

  let lastTime = 0;

  function gameLoop(timestamp) {
    let dt = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_HEIGHT, GAME_WIDTH);

    game.update(dt);
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
  }

  requestAnimationFrame(gameLoop);
});
