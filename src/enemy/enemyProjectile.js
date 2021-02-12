import Explosion from "../util/explosion";

export default class EnemyProjectile {
  constructor(x, y, sprite, width, height, speed, game) {
    this.position = {
      x: x,
      y: y,
    };
    this.speed = speed;
    this.sprite = sprite;
    this.width = width;
    this.height = height;
    this.game = game;
  }

  draw(ctx) {
    ctx.drawImage(
      this.sprite,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    if (this.position.x < this.game.player.receiveAttack) {
      this.game.enemyStatus.render();
      this.game.elements.pop();
      this.game.elements.push(
        new Explosion(this.position.x, this.position.y, this.game)
      );
    }
  }

  update(dt) {
    this.position.x += this.speed;
  }
}
