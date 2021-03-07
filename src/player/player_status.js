import Animation from "../util/animation";
import Energy from "./energy";

export default class PlayerStatus {
  constructor(game) {
    this.position = {
      x: 210,
      y: 30,
    };
    this.game = game;
    // this.render();
  }

  // render() {
  //   this.renderShields();
  //   this.renderArmor();
  //   this.renderEnergy();
  //   this.renderLasers();
  //   this.renderMissles();
  // }

  // renderShields() {
  //   this.shields = this.game.player.shields;
  //   this.armor = this.game.player.armor;
  //   // const playerShields = document.createElement("span");
  //   // playerShields.innerText = `${this.shields}`;
  //   // document.getElementById("player-shields").appendChild(playerShields);
  //   document.getElementById(
  //     "player-armor-num"
  //   ).innerText = `Dad Shields: ${this.shields} Dad Armor: ${this.armor}`;
  // }
  // renderArmor() {
  //   // // const playerArmor = document.createElement("span");
  //   // // playerArmor.innerText = `${this.armor}`;
  //   // // document.getElementById("player-armor").appendChild(playerArmor);
  //   // document.getElementById("player-armor-num").innerText = `${this.armor}`;
  // }
  // renderEnergy() {
  //   this.energy = this.game.player.energy;
  //   // const playerEnergy = document.createElement("span");
  //   // playerEnergy.innerText = `${this.energy}`;
  //   // document.getElementById("player-energy").appendChild(playerEnergy);
  //   document.getElementById("player-energy-num").innerText = `${this.energy}`;
  // }

  // renderLasers() {
  //   this.lasers = this.game.player.lasers;
  //   document.getElementById("player-lasers-num").innerText = `${this.lasers}`;
  // }

  // renderMissles() {
  //   this.missles = this.game.player.missles;
  //   document.getElementById("player-missles-num").innerText = `${this.missles}`;
  // }

  renderEnergy(ctx) {
    this.game.player.energy.forEach((ball) => {
      ball.draw(ctx);
    });
  }

  draw(ctx) {
    // const energy = this.game.player.energy;
    // const energyX = 500;
    // for (let i = 0; i < energy; i++) {
    //   debugger;
    //   let x = i * 40 + energyX;
    //   let dad = new Energy(x, 40);
    //   dad.draw(ctx);
    // }
    this.renderEnergy(ctx);
    ctx.fillStyle = "#6f6";
    ctx.textAlign = "left";
    ctx.fillText(`Dad Stats:`, this.position.x, this.position.y);
    ctx.fillStyle = "white";
    ctx.fillText(
      `Shields: ${this.game.player.shields}    Lasers: ${this.game.player.lasers}`,
      // `Shields: ${this.game.player.shields}    Lasers: ${this.game.player.lasers}       Energy: ${this.game.player.energy}`,
      this.position.x + 10,
      this.position.y + 25
    );
    ctx.fillText(
      `Armor: ${this.game.player.armor}      Missles: ${this.game.player.missles}`,
      this.position.x + 10,
      this.position.y + 50
    );
    ctx.fillStyle = "#ffbb00";
    ctx.fillText(`Energy`, 765, 40);

    // ctx.fillStyle = "blue";
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    // ctx.fillStyle = "white";
    // ctx.fillText(
    //   `Shields: ${this.game.player.shields}`,
    //   this.position.x + 10,
    //   this.position.y + 30
    // );
    // ctx.fillText(
    //   `Armor: ${this.game.player.armor}`,
    //   this.position.x + 10,
    //   this.position.y + 60
    // );
    // ctx.fillText(
    //   `Energy: ${this.game.player.energy}`,
    //   this.position.x + 10,
    //   this.position.y + 90
    // );
  }

  update() {}
}
