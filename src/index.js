import Game from "./game";
import "./styles/index.scss";

// document.addEventListener("DOMContentLoaded", () => {
//   const p = document.createElement("p");
//   p.innerText = "hellooooooo";
//   document.body.append(p);
//   debugger;
// });

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("rules-pic-box").addEventListener("click", () => {
    document.getElementById("rules-pic-box").classList.add("hidden");
  });

  // Array.from(document.getElementsByClassName("card-button")).forEach(
  //   (button, i) => {
  //     button.addEventListener("click", () => {
  //       debugger;
  //       let card = document.getElementById(`nc-${i}`);
  //       if (card.childNodes.length === 1) {
  //         debugger;
  //         if (this.game.playerTurn && card.check() && this.disabled === false) {
  //           this.disabled = true;
  //           setTimeout(() => {
  //             this.disabled = false;
  //           }, 2500);
  //           card.action();
  //           this.discardPile.push(card);
  //           document.getElementById(`card-${i}`).classList.add("playCard");

  //           setTimeout(() => {
  //             document.getElementById(`card-${i}`).remove();
  //           }, 1450);
  //         }
  //       }
  //     });
  //   }
  // );

  const GAME_WIDTH = 1600;
  const GAME_HEIGHT = 900;
  let game = new Game(GAME_WIDTH, GAME_HEIGHT);
  game.pregame();

  const startingCards = [];

  let canvas = document.getElementById("game-screen");
  let ctx = canvas.getContext("2d");
  let lastTime = 0;
  let frames = 0;

  const endTurn = document.getElementById("end-turn-button");

  endTurn.addEventListener("click", () => {
    if (!game.hand.disabled && game.playerTurn) game.hand.endTurn();
    // if (game.playerTurn) game.hand.endTurn();
    // if (!game.hand.disabled) game.hand.endTurn();
  });

  function gameLoop(timestamp) {
    let dt = timestamp - lastTime;
    lastTime = timestamp;

    game.update(dt);
    game.draw(ctx);

    if (!game.isOver()) {
      requestAnimationFrame(gameLoop);
    }
    // game.isOver();
  }

  requestAnimationFrame(gameLoop);
});
