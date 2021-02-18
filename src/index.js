import Game from "./game";
import "./styles/index.scss";

// document.addEventListener("DOMContentLoaded", () => {
//   const p = document.createElement("p");
//   p.innerText = "hellooooooo";
//   document.body.append(p);
//   debugger;
// });

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("rules-button").addEventListener("click", () => {
    document.getElementById("rules").classList.remove("hidden");
    document.getElementById("rules").classList.add("visible");
  });
  document.getElementById("rules-close").addEventListener("click", () => {
    document.getElementById("rules").classList.add("hidden");
  });
  document.getElementById("rules-pic-button").addEventListener("click", () => {
    document.getElementById("rules-pic-box").classList.remove("hidden");
    document.getElementById("rules-pic-box").classList.add("visible");
  });

  document.getElementById("rules-pic-box").addEventListener("click", () => {
    document.getElementById("rules-pic-box").classList.add("hidden");
  });

  const GAME_WIDTH = 1400;
  const GAME_HEIGHT = 500;
  let game = new Game(GAME_WIDTH, GAME_HEIGHT);
  const startingChoices = Array.from(
    document.getElementById("popup-bottom-row").children
  );
  const startingCards = [];

  startingChoices.forEach((card) => {
    card.addEventListener("click", () => {
      if (startingCards.includes(card.id)) {
        startingCards.splice(startingCards.indexOf(card.id), 1);
      } else {
        startingCards.push(card.id);
      }

      if (card.classList.contains("selectCard")) {
        card.classList.remove("selectCard");
      } else {
        card.classList.add("selectCard");
      }
    });
  });

  document.getElementById("start-game-btn").addEventListener("click", () => {
    game.start(startingCards);
    document.getElementById("rules").classList.remove("visible");
    document.getElementById("rules").classList.add("hidden");
  });

  let canvas = document.getElementById("game-screen");
  let ctx = canvas.getContext("2d");
  let lastTime = 0;
  let frames = 0;

  const endTurn = document.getElementById("end-turn-button");

  endTurn.addEventListener("click", () => {
    debugger;
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
