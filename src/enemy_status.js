export default class EnemyStatus {
  constructor(game) {
    this.height = 300;
    this.width = game.gameWidth * 0.25;
    this.position = {
      x: game.gameWidth - this.width - 20,
      y: game.gameHeight - this.height - 20,
    };
    this.game = game;
  }

  draw(ctx) {
    // ctx.fillStyle = "blue";
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.font = "20px Georgia";
    ctx.fillStyle = "black";
    ctx.fillText(
      `Shields: ${this.game.enemy.shields}`,
      this.enemy.position.x + 10,
      this.enemy.position.y + 30
    );
    ctx.fillText(
      `Armor: ${this.game.enemy.armor}`,
      this.enemy.position.x + 10,
      this.enemy.position.y + 60
    );
    ctx.fillText(
      `Energy: ${this.game.enemy.energy}`,
      this.enemy.position.x + 10,
      this.enemy.position.y + 90
    );
  }
}
