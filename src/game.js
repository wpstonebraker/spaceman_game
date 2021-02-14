import Card from "./cards/card";
import Enemy from "./enemy/enemy";
import Hand from "./hand";
import Player from "./player/player";
import PlayerStatus from "./player/player_status";
import EnemyStatus from "./enemy/enemy_status";
import Overcharge from "./cards/overcharge";
import Explosion from "./util/explosion";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.background = document.getElementById("img_background");
    this.playerTurn = true;
    this.projectiles = [];
    // this.startingCard = startingCard;
    this.elements = [];
    this.hasStarted = false;
  }

  start(startingCard) {
    this.hasStarted = true;
    this.player = new Player(this);

    this.enemy = new Enemy(this);
    this.playerStatus = new PlayerStatus(this);

    this.hand = new Hand(this, startingCard);

    this.enemyStatus = new EnemyStatus(this);

    this.elements = [this.player, this.enemy, ...this.projectiles];
  }

  computerTurn() {
    if (!this.playerTurn) {
      this.enemy.action();
    }
  }

  update(dt) {
    // this.enemy.update(dt);
    this.elements.forEach((element) => element.update(dt));
  }

  isOver() {
    if (this.hasStarted) {
      if (this.enemy.armor <= 0) {
        // const endScreen = document.createElement("div");
        // endScreen.classList.add("end-screen");
        // endScreen.innerText = "YOU WON!";
        // document.getElementById("end-turn-button").appendChild(endScreen);
        // this.enemy.image = "";
        // document.getElementById("card-description").innerText = "YOU WIN!";
        document.getElementById("enemy-display").innerText =
          "ENEMY DESTROYED! YOU WIN!";
        this.hand.disabled = true;
        return true;
        this.elements = [];
      } else if (this.player.armor <= 0) {
        document.getElementById("enemy-display").innerText =
          "ABANDON SHIP! YOU HAVE LOST THE BATTLE!";
        this.hand.disabled = true;
        return true;
      }
      return false;
    }
  }

  draw(ctx) {
    ctx.drawImage(this.background, 0, 0, 1400, 800);
    this.elements.forEach((element) => element.draw(ctx));
  }
}
