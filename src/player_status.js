export default class PlayerStatus {
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
    ctx.fillStyle = "blue";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.font = "20px Georgia";
    ctx.fillStyle = "black";
    ctx.fillText(
      `Shields: ${this.game.player.shields}`,
      this.position.x + 10,
      this.position.y + 30
    );
    ctx.fillText(
      `Armor: ${this.game.player.armor}`,
      this.position.x + 10,
      this.position.y + 60
    );
    ctx.fillText(
      `Energy: ${this.game.player.energy}`,
      this.position.x + 10,
      this.position.y + 90
    );
  }
}
