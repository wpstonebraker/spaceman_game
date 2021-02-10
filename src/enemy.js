export default class Enemy {
  constructor(game) {
    this.image = document.getElementById("img_npc1");
    this.position = {
      x: 1000,
      y: 100,
    };

    this.speed = 4;

    this.game = game;

    this.width = 256;
    this.height = 256;
    this.shields = 50;
    this.armor = 100;
    this.lasers = 5;
    this.missles = 10;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  action() {
    debugger;
    if (this.shields < 25) {
      this.heal();
    } else if (this.game.player.shields > 0) {
      this.attackLasers();
    } else {
      this.attackMissles();
    }
  }

  heal() {
    this.shields += 5;
  }

  attackLasers() {
    this.game.player.shields -= this.lasers;
    this.game.playerStatus.render();
  }

  attackMissles() {
    this.game.player.armor -= this.missles;
  }
}
