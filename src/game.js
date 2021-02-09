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
    this.humanPlayer = true;
  }

  start() {
    this.player = new Player(this);

    this.enemy = new Enemy(this);

    this.hand = new Hand(this);

    this.playerStatus = new PlayerStatus(this);
    this.enemyStatus = new EnemyStatus(this);

    // this.card = new Card(this);
    // this.attack = new Attack(this);
    // this.recharge = new Recharge(this);

    new HandleInput(this.recharge);
    this.elements = [
      this.player,
      this.enemy,
      this.hand,
      this.playerStatus,
      this.enemyStatus,
      // this.card,
      // this.attack,
      // this.recharge,
    ];
  }

  draw(ctx) {
    debugger;
    ctx.drawImage(this.background, 0, 0, 1400, 800);
    this.elements.forEach((element) => element.draw(ctx));
  }
}
