import Explosion from "./explosion";

export default class Projectile {
  constructor(x, y, sprite, width, height, game) {
    this.position = {
      x: x,
      y: y,
    };
    this.speed = 7;
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

    if (this.position.x > this.game.enemy.receiveAttack) {
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
