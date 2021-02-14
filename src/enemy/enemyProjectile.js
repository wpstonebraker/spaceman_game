import Shields from "../player/shields";
import Explosion from "../util/explosion";

export default class EnemyProjectile {
  constructor(x, y, sprite, width, height, speed, game, atkType) {
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
  }

  draw(ctx) {
    debugger;
    ctx.drawImage(
      this.sprite,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    if (
      this.game.player.shields > 0 &&
      this.position.x < this.game.player.receiveAttack + 10
    ) {
      this.game.playerStatus.render();
      this.game.elements.pop();
      this.game.elements.push(
        new Shields(this.position.x, this.position.y, this.game)
      );
      this.game.player.receiveDamage(this.atkType);
    } else if (this.position.x < this.game.player.receiveAttack) {
      this.game.playerStatus.render();
      this.game.elements.pop();
      this.game.elements.push(
        new Explosion(this.position.x, this.position.y, this.game)
      );
      this.game.player.receiveDamage(this.atkType);
    }
  }

  update(dt) {
    this.position.x += this.speed;
  }
}
