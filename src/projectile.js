// export default class Projectile {
//   constructor(x, y, velocity) {
//     (this.x = x), (this.y = y), (this.velocity = velocity);
//   }
// }

export default class Projectile {
  constructor(x, y, sprite, width, height, game) {
    this.position = {
      x: x,
      y: y,
    };
    this.speed = 5;
    this.sprite = sprite;
    this.width = width;
    this.height = height;
    this.game = game;
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

    if (this.position.x > this.game.enemy.receiveAttack) {
      this.game.elements.pop();
    }
  }

  update(dt) {
    debugger;
    this.position.x += this.speed;
  }
}

// if (this.position.x < this.game.enemy.receiveAttack) {

// this.game.elements.push(
//   new Projectile(this.position.x, this.position.y, this.sprite, 20, 3)
// );
