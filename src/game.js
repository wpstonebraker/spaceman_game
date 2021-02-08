import Card from "./card";
import Enemy from "./enemy";
import Hand from "./hand";
import HandleInput from "./input";
import Player from "./player";
import Status from "./player_status";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.background = document.getElementById("img_background");
  }

  start() {
    // debugger;
    this.player = new Player(this);
    // debugger;
    this.enemy = new Enemy(this);
    // debugger;
    this.hand = new Hand(this);
    // debugger;
    this.status = new Status(this);
    // debugger;
    this.card = new Card(this);
    // debugger;
    new HandleInput(this.card);
    this.elements = [
      this.player,
      this.enemy,
      this.hand,
      this.status,
      this.card,
    ];
  }

  draw(ctx) {
    // debugger;
    ctx.drawImage(this.background, 0, 0, 1400, 800);
    this.elements.forEach((element) => element.draw(ctx));
    // debugger;
    // this.player.draw(ctx);
    // // debugger;
    // this.enemy.draw(ctx);
    // // debugger;
    // this.hand.draw(ctx);
    // // debugger;
    // this.status.draw(ctx);
    // // debugger;
    // this.card.draw(ctx);
    // debugger;
  }
}
