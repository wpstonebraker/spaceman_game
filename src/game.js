import Card from "./cards/card";
import Enemy from "./enemy/enemy";
import Hand from "./hand";
import Player from "./player/player";
import PlayerStatus from "./player/player_status";
import EnemyStatus from "./enemy/enemy_status";
import Overcharge from "./cards/overcharge";
import Explosion from "./util/explosion";
import InputHandler from "./player/Input";
import InstallUpdate from "./cards/installUpdate";
import StartGame from "./cards/startGame";
import SyphonEnergy from "./cards/syphonEnergy";
import Salvo from "./cards/salvo";
import TuneUp from "./cards/tuneUp";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.background = document.getElementById("img_background");
    this.projectiles = [];
    this.startingChoices = [];
    this.gameState = 0;
    this.startingCards = [];
    this.elements = [];
    this.playerTurn = true;
    this.hasStarted = false;
  }

  selectCards() {
    this.gameState = 1;
    this.player = new Player(this);
    this.elements = [this.player];
    this.initializeStartingCards();
    new InputHandler(this.player);
  }

  initializeStartingCards() {
    this.startingChoices = [
      new InstallUpdate(this),
      new Overcharge(this),
      new SyphonEnergy(this),
      new TuneUp(this),
      new Salvo(this),
      new StartGame(this),
    ];
  }

  drawStartingCards(ctx) {
    ctx.drawImage(this.background, 0, 0, 1600, 800);
    this.startingChoices.forEach((card, i) => {
      card.draw(ctx, 1200, card.y, 40, 60);
    });
    this.elements.forEach((element) => element.draw(ctx));
    this.projectiles.forEach((element) => element.draw(ctx));
  }

  start(startingCards) {
    this.hasStarted = true;
    this.player = new Player(this);

    this.enemy = new Enemy(this);
    this.playerStatus = new PlayerStatus(this);

    this.hand = new Hand(this, startingCards);

    this.enemyStatus = new EnemyStatus(this);

    this.elements = [this.player, this.enemy];
    this.gameState = 2;
  }

  computerTurn() {
    if (!this.playerTurn) {
      this.enemy.action();
    }
  }

  update(dt) {
    // this.enemy.update(dt);
    this.startingChoices.forEach((card) => card.update(dt));

    this.elements.forEach((element) => element.update(dt));
    this.projectiles.forEach((element) => element.update(dt));
  }

  isOver() {
    if (this.hasStarted) {
      if (this.enemy.armor <= 0) {
        document.getElementById("enemy-display-span").innerText =
          "ENEMY DESTROYED! YOU WIN!";
        this.hand.disabled = true;
        return true;
      } else if (this.player.armor <= 0) {
        document.getElementById("enemy-display-span").innerText =
          "ABANDON SHIP! YOU HAVE LOST THE BATTLE!";
        this.hand.disabled = true;
        return true;
      }
      return false;
    }
  }

  draw(ctx) {
    switch (this.gameState) {
      case 0:
        ctx.drawImage(this.background, 0, 0, 1600, 800);
        break;
      case 1:
        ctx.drawImage(this.background, 0, 0, 1600, 800);
        this.startingChoices.forEach((card, i) => {
          card.draw(ctx, 1200, card.y, 40, 60);
          card.checkPos();
        });
        this.elements.forEach((element) => element.draw(ctx));
        this.projectiles.forEach((element) => element.draw(ctx));
        break;
      case 2:
        ctx.drawImage(this.background, 0, 0, 1600, 800);
        // this.startingChoices.forEach((card) => card.draw(ctx));
        this.elements.forEach((element) => element.draw(ctx));
        this.projectiles.forEach((element) => element.draw(ctx));
        break;
      default:
        break;
    }
  }
}
