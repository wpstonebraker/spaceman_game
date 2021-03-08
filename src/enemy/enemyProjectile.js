import Shields from "../player/shields";
import Explosion from "../util/explosion";

export default class EnemyProjectile {
  constructor(x, y, sprite, width, height, speed, game, atkType, velocity) {
    this.position = {
      x: x,
      y: y,
    };
    this.speed = speed;
    this.sprite = sprite;
    this.width = width;
    this.height = height;
    this.game = game;
    this.atkType = atkType;
    this.velocity = velocity;
  }

  draw(ctx) {
    ctx.drawImage(
      this.sprite,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    if (
      this.game.player.shields > 0 &&
      this.position.x < this.game.player.position.x + 100
    ) {
      this.game.projectiles.pop();
      this.game.elements.push(
        new Shields(this.position.x, this.position.y, this.game)
      );
      this.game.player.receiveDamage(this.atkType);
    } else if (this.position.x < this.game.player.position.x + 100) {
      this.game.projectiles.pop();
      this.game.elements.push(
        new Explosion(this.position.x, this.position.y, this.game)
      );
      this.game.player.receiveDamage(this.atkType);
    }
  }

  update(dt) {
    this.position.x -= this.velocity.x * 30;
    this.position.y -= this.velocity.y * 30;
  }
}
