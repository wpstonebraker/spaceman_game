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

  function gameLoop() {
    ctx.clearRect(0, 0, GAME_HEIGHT, GAME_WIDTH);

    game.draw(ctx);
    // game.update(dt);
    requestAnimationFrame(gameLoop);
  }

  requestAnimationFrame(gameLoop);
});
