import Card from "./card";
import Enemy from "./enemy";
import Hand from "./hand";
import HandleInput from "./input";
import Player from "./player";
import PlayerStatus from "./player_status";
import EnemyStatus from "./enemy_status";
import Attack from "./cards/attack";
import Recharge from "./cards/recharge";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.background = document.getElementById("img_background");
    this.playerTurn = true;
  }

  start() {
    this.player = new Player(this);

    this.enemy = new Enemy(this);

    this.hand = new Hand(this);

    this.playerStatus = new PlayerStatus(this);
    this.enemyStatus = new EnemyStatus(this);

    this.elements = [this.player, this.enemy, this.enemyStatus];
  }

  computerTurn() {
    debugger;
    if (!this.playerTurn) {
      this.enemy.action();
      this.hand.startTurn();
    }
  }

  update(dt) {
    // this.enemy.update(dt)
  }

  draw(ctx) {
    ctx.drawImage(this.background, 0, 0, 1400, 800);
    this.elements.forEach((element) => element.draw(ctx));
  }
}
