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
import Button from "./buttons/button";
import SmallEnemy from "./enemy/smallEnemy";
import Coffee from "./util/coffee";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.background = document.getElementById("img_background");
    this.projectiles = [];
    this.startingChoices = [];
    this.gameState = 0;
    this.startingCards = [];
    this.enemies = [];
    this.elements = [];
    this.playerTurn = true;
    this.hasStarted = false;
    this.player = new Player(this);
    this.target;
    this.gameover = false;
    this.isOver = this.isOver.bind(this);
    this.topDash = document.getElementById("img_topDash");
    this.bottomDash = document.getElementById("img_bottomDash");
    this.topScreen = document.getElementById("img_topTerminal");
    this.energyScreen = document.getElementById("img_energyTerminal");
  }

  pregame() {
    this.elements = [this.player];
    new InputHandler(this.player);
    this.initializeStartScreenButtons();
  }

  drawSelectScreenWords(ctx) {
    ctx.font = "25px VT323";
    ctx.fillStyle = "white";
    ctx.fillText("Move Up and Down with W and S", 200, 200);
    ctx.fillText("Move Left and Right with A and D", 200, 220);
    ctx.fillText("Use space to shoot a selection", 200, 500);
  }

  initializeStartScreenButtons() {
    const btnX = 725;
    const story = document.getElementById("btn-story");
    const instructions = document.getElementById("btn-instructions");
    const illustration = document.getElementById("btn-illustration");
    const startGame = document.getElementById("btn-start");
    const credits = document.getElementById("btn-credits");
    const reset = document.getElementById("btn-reset");
    this.elements.push(
      new Button(story, btnX, 75, "story", this, 128, 64),
      new Button(instructions, btnX, 175, "instructions", this, 128, 64),
      new Button(illustration, btnX, 275, "illustration", this, 128, 64),
      new Button(startGame, btnX, 375, "start", this, 128, 64),
      new Button(credits, btnX, 475, "credits", this, 128, 64),
      new Button(reset, btnX, 575, "reset", this, 128, 64)
    );
  }

  drawSelectInstructions(ctx) {
    ctx.font = "25px VT323";
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    ctx.fillText("Shoot to select your starting cards", 150, 200);
  }

  selectCards() {
    this.elements = [this.player];
    this.gameState = 1;
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

  // drawStartingCards(ctx) {
  //   ctx.drawImage(this.background, 0, 0, 1600, 800);
  //   this.startingChoices.forEach((card, i) => {
  //     card.draw(ctx, 1200, card.y, 40, 60);
  //   });
  //   this.elements.forEach((element) => element.draw(ctx));
  //   this.projectiles.forEach((element) => element.draw(ctx));
  // }

  manageIntro(startingCards) {
    // this.player = new Player(this);
    this.elements = [this.player];

    this.gameState = 2;
    // setTimeout(() => {
    //   this.gameState = 3;
    // }, 3000);
    // setTimeout(() => {
    //   this.gameState = 4;
    // }, 10000);
    setTimeout(() => {
      this.start(startingCards);
    }, 1000);
  }

  writeIntroText1(ctx) {
    ctx.font = "25px VT323";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(
      "Space Dad heads back to Earth after a long day on Mars...",
      500,
      500
    );
    ctx.fillText("Suddenly, Alien vessels appear blocking his path.", 500, 550);
  }

  writeIntroText2(ctx) {
    ctx.font = "25px VT323";
    ctx.fillStyle = "white";
    ctx.textAlign = "right";
    ctx.fillText(
      "*ring ring* 'Honey, I'm going to be late. Yeah. Aliens again.'",
      500,
      200
    );
  }

  // boss fight
  // start(startingCards) {
  //   this.hasStarted = true;
  //   this.player = new Player(this);

  //   this.enemy = new Enemy(this);
  //   this.playerStatus = new PlayerStatus(this);

  //   this.hand = new Hand(this, startingCards);

  //   this.enemyStatus = new EnemyStatus(this);

  //   this.elements = [this.player, this.enemy, new SmallEnemy(this, 1500, 500)];
  //   this.gameState = 5;
  // }
  start(startingCards) {
    this.hasStarted = true;
    // this.player = new Player(this);

    this.playerStatus = new PlayerStatus(this);

    this.hand = new Hand(this, startingCards);

    this.enemy = new Enemy(this, 1500, 100);
    this.coffee = new Coffee(this);

    this.enemies = [
      new SmallEnemy(this, 1500, 100),
      new SmallEnemy(this, 1500, 300),
      new SmallEnemy(this, 1500, 500),
    ];
    // this.enemyStatus = new EnemyStatus(this);

    this.elements = [
      this.playerStatus,
      this.player,
      this.coffee,
      ...this.enemies,
    ];
    this.gameState = 5;
    // this.introBossBattle();
  }

  introBossBattle() {
    this.hand.endTurn();
    this.gameState = 6;

    this.enemies = [this.enemy];
    this.elements = [this.playerStatus, this.player, ...this.enemies];
    setTimeout(() => {
      this.startBossBattle();
    }, 5000);
  }

  startBossBattle() {
    // this.hand.startTurn();
  }

  computerTurn() {
    if (!this.playerTurn) {
      this.enemies.forEach((enemy, i) => {
        setTimeout(() => {
          enemy.action();
        }, (i + 1) * 1000);
      });
      // this.enemy.action();
    }

    setTimeout(() => {
      this.hand.startTurn();
    }, this.enemies.length * 1000 + 1000);
  }

  update(dt) {
    this.startingChoices.forEach((card) => card.update(dt));

    this.elements.forEach((element) => element.update(dt));
    this.projectiles.forEach((element) => element.update(dt));
  }

  isOver() {
    if (!this.gameover) {
      return false;
    } else {
      return true;
    }
    // if (this.hasStarted) {
    //   // if (this.enemy.armor <= 0) {
    //   //   document.getElementById("enemy-display-span").innerText =
    //   //     "ENEMY DESTROYED! YOU WIN!";
    //   //   this.hand.disabled = true;
    //   //   return true;
    //   // } else if (this.player.armor <= 0) {
    //   if (this.player.armor <= 0) {
    //     document.getElementById("enemy-display-span").innerText =
    //       "ABANDON SHIP! YOU HAVE LOST THE BATTLE!";
    //     this.hand.disabled = true;
    //     return true;
    //   }
    //   return false;
    // }
  }

  endScreen() {
    this.gameState = 7;
    const linkedIn = document.getElementById("img_linkedIn");

    this.elements.push(new Button(linkedIn, 1000, 75, "linked in", this));
  }

  draw(ctx) {
    ctx.drawImage(this.background, 0, 0, 1600, 900);
    ctx.drawImage(this.topDash, 0, 0, 1600, 94);
    ctx.drawImage(this.bottomDash, 0, this.gameHeight - 340, 1600, 340);
    ctx.drawImage(this.topScreen, 200, 0, 300, 100);
    ctx.drawImage(this.topScreen, 1100, 0, 300, 100);
    // card terminal
    ctx.drawImage(this.energyScreen, 470, 680, 700, 165);
    ctx.drawImage(this.energyScreen, 675, 10, 250, 80);
    switch (this.gameState) {
      case 0: // start screen
        this.drawSelectScreenWords(ctx);
        this.elements.forEach((element) => element.draw(ctx));
        this.projectiles.forEach((element) => element.draw(ctx));
        break;
      case 1: // select Power Cards screen
        this.drawSelectInstructions(ctx);
        this.startingChoices.forEach((card, i) => {
          card.draw(ctx, 1200, card.y, 40, 60);
          card.checkPos(ctx);
        });
        this.elements.forEach((element) => element.draw(ctx));
        this.projectiles.forEach((element) => element.draw(ctx));
        break;
      case 2: // intro pause
        this.elements.forEach((element) => element.draw(ctx));
        break;
      case 3: // intro words 1
        this.elements.forEach((element) => element.draw(ctx));
        this.writeIntroText1(ctx);
        break;
      case 4: // intro words 2
        this.elements.forEach((element) => element.draw(ctx));
        this.writeIntroText2(ctx);
        break;
      case 5: // battle 1
        this.elements.forEach((element) => element.draw(ctx));
        this.projectiles.forEach((element) => element.draw(ctx));
        if (this.enemies.length === 0) this.introBossBattle();
        break;
      case 6: // boss battle
        this.elements.forEach((element) => element.draw(ctx));
        this.projectiles.forEach((element) => element.draw(ctx));
        break;
      case 7:
        ctx.fillText("YOU WIN!", 200, 200);

        this.elements.forEach((element) => element.draw(ctx));
        this.projectiles.forEach((element) => element.draw(ctx));
        break;

      default:
        break;
    }
  }
}
