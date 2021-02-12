export default class PlayerStatus {
  constructor(game) {
    this.game = game;
    this.armor = game.player.armor;
    this.energy = game.player.energy;
    this.stats = [this.shields, this.armor, this.energy];
    this.render();
  }

  render() {
    this.renderShields();
    this.renderArmor();
    this.renderEnergy();
    this.renderLasers();
    this.renderMissles();
  }

  renderShields() {
    this.shields = this.game.player.shields;
    // const playerShields = document.createElement("span");
    // playerShields.innerText = `${this.shields}`;
    // document.getElementById("player-shields").appendChild(playerShields);
    document.getElementById("player-shields-num").innerText = `${this.shields}`;
  }
  renderArmor() {
    this.armor = this.game.player.armor;
    // const playerArmor = document.createElement("span");
    // playerArmor.innerText = `${this.armor}`;
    // document.getElementById("player-armor").appendChild(playerArmor);
    document.getElementById("player-armor-num").innerText = `${this.armor}`;
  }
  renderEnergy() {
    this.energy = this.game.player.energy;
    // const playerEnergy = document.createElement("span");
    // playerEnergy.innerText = `${this.energy}`;
    // document.getElementById("player-energy").appendChild(playerEnergy);
    document.getElementById("player-energy-num").innerText = `${this.energy}`;
  }

  renderLasers() {
    this.lasers = this.game.player.lasers;
    document.getElementById("player-lasers-num").innerText = `${this.lasers}`;
  }

  renderMissles() {
    this.missles = this.game.player.missles;
    document.getElementById("player-missles-num").innerText = `${this.missles}`;
  }

  // draw(ctx) {
  //   ctx.fillStyle = "blue";
  //   ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  //   ctx.font = "20px Georgia";
  //   ctx.fillStyle = "black";
  //   ctx.fillText(
  //     `Shields: ${this.game.player.shields}`,
  //     this.position.x + 10,
  //     this.position.y + 30
  //   );
  //   ctx.fillText(
  //     `Armor: ${this.game.player.armor}`,
  //     this.position.x + 10,
  //     this.position.y + 60
  //   );
  //   ctx.fillText(
  //     `Energy: ${this.game.player.energy}`,
  //     this.position.x + 10,
  //     this.position.y + 90
  //   );
  // }
}
