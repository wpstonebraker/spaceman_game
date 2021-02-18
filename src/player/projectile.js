import EnemyShields from "../enemy/enemyShields";
import Explosion from "../util/explosion";

export default class Projectile {
  constructor(x, y, sprite, width, height, speed, game, atkType) {
    this.position = {
      x: x + game.player.position.x,
      y: y + game.player.position.y,
    };
    this.speed = speed;
    this.sprite = sprite;
    this.width = width;
    this.height = height;
    this.game = game;
    this.atkType = atkType;
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
      this.game.enemy.shields > 0 &&
      this.position.x > this.game.enemy.receiveAttack - 20
    ) {
      this.game.enemyStatus.render();
      this.game.projectiles.shift();
      this.game.elements.push(
        new EnemyShields(this.position.x, this.position.y, this.game)
      );
      this.game.enemy.receiveDamage(this.atkType);
    } else if (this.position.x > this.game.enemy.receiveAttack) {
      this.game.enemyStatus.render();
      this.game.projectiles.shift();
      this.game.elements.push(
        new Explosion(this.position.x, this.position.y, this.game)
      );
      this.game.enemy.receiveDamage(this.atkType);
    }
  }

  update(dt) {
    this.position.x += this.speed;
  }
}
