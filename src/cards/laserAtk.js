import Card from "../card";

export default class LaserAttack extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.image = "assets/laserAtk.png";
    this.description = `Fire your lasers. Lasers do ${
      this.game.player.lasers
    } damage vs Shields and half damage (${
      this.game.player.lasers / 2
    }) vs Armor`;
    this.speed = 5;
    this.lastTime = 0;
    this.position = {
      x: this.game.player.laserPoint1,
      y: this.game.player.laserPoint1,
    };
    this.animate = this.animate.bind(this);
  }

  action() {
    if (this.game.enemy.shields > 0)
      this.game.enemy.shields -= this.game.player.lasers;
    else this.game.enemy.armor -= this.game.player.lasers / 2;
    this.game.player.energy -= this.cost;
    this.game.playerStatus.render();
  }

  draw() {
    let canvas = document.getElementById("game-screen");

    let ctx = canvas.getContext("2d");
    if (this.position.x < this.game.enemy.receiveAttack) {
      ctx.fillStyle = "rgba(255, 0, 0)";
    } else {
      ctx.fillStyle = "rgba(255, 0, 0, 0.0)";
    }
    ctx.fillRect(this.position.x, this.position.y, 20, 3);
  }

  update(dt) {
    // let dt = timestamp - lastTime;
    // lastTime = timestamp;
    this.position.x += this.speed;
  }

  animate(timestamp) {
    let dt = timestamp - this.lastTime;
    this.lastTime = timestamp;
    // ctx.clearRect(0, 0, GAME_HEIGHT, GAME_WIDTH);

    this.update(dt);
    this.draw();
    requestAnimationFrame(this.animate);
  }
}
