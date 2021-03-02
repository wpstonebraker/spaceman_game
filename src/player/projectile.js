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

    const self = this;

    this.game.enemies.forEach((enemy) => {
      debugger;
      if (
        enemy.shields > 0 &&
        self.position.x > enemy.receiveAttackX &&
        self.position.y >= enemy.receiveAttackTop &&
        self.position.y <= enemy.receiveAttackBottom
      ) {
        self.game.target = enemy;
        // self.game.enemyStatus.render();
        const idx = self.game.projectiles.indexOf(self);
        self.game.projectiles.splice(idx, 1);
        enemy.renderShields();
        self.game.target.receiveDamage(self.atkType);
      } else if (
        self.position.x > enemy.receiveAttackX &&
        self.position.y >= enemy.receiveAttackTop &&
        self.position.y <= enemy.receiveAttackBottom
      ) {
        self.game.target = enemy;
        // self.game.enemyStatus.render();
        const idx = self.game.projectiles.indexOf(self);
        self.game.projectiles.splice(idx, 1);
        enemy.renderExplosion(self.position.x, self.position.y);
        self.game.target.receiveDamage(self.atkType);
      } else if (self.position.x > self.game.gameWidth) {
        const idx = self.game.projectiles.indexOf(self);
        self.game.projectiles.splice(idx, 1);
      }
      // } else if (this.position.x > this.game.enemy.receiveAttack) {
      //   this.game.enemyStatus.render();
      //   this.game.projectiles.shift();
      //   this.game.elements.push(
      //     new Explosion(this.position.x, this.position.y, this.game)
      //   );
      // this.game.enemy.receiveDamage(this.atkType);
      // }
    });
  }

  update(dt) {
    this.position.x += this.speed;
  }
}
