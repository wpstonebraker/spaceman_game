import Card from "./card";
import Enemy from "./enemy";
import Hand from "./hand";
import Player from "./player";
import PlayerStatus from "./player_status";
import EnemyStatus from "./enemy_status";
import LaserAttack from "./cards/laserAtk";
import Recharge from "./cards/recharge";
import Projectile from "./projectile";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.background = document.getElementById("img_background");
    this.playerTurn = true;
    this.projectiles = [];
    // this.projectiles = [
    //   new Projectile(200, 200, document.getElementById("img_laser"), 20, 3),
    // ];
  }

  start() {
    this.player = new Player(this);

    this.enemy = new Enemy(this);
    this.playerStatus = new PlayerStatus(this);

    this.hand = new Hand(this);

    this.enemyStatus = new EnemyStatus(this);

    this.elements = [this.player, this.enemy, ...this.projectiles];
  }

  computerTurn() {
    if (!this.playerTurn) {
      this.enemy.action();
      this.hand.startTurn();
    }
  }

  update(dt) {
    // this.enemy.update(dt);
    this.elements.forEach((element) => element.update(dt));
  }

  isOver() {
    if (this.enemy.armor === 0) {
      this.enemy.image = "";
    }
  }

  draw(ctx) {
    ctx.drawImage(this.background, 0, 0, 1400, 800);
    this.elements.forEach((element) => element.draw(ctx));
  }
}
