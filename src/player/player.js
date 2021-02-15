export default class Player {
  constructor(game) {
    this.image = document.getElementById("testship");
    // this.image = document.getElementById("img_player");
    this.gameHeight = game.gameHeight;
    this.position = {
      x: 200,
      //   y: game.gameHeight / 2 - this.height / 2,
      y: 200,
    };
    this.width = 64;
    this.height = 64;
    this.shields = 50;
    this.armor = 50;
    this.maxEnergy = 3;
    this.energy = this.maxEnergy;
    this.lasers = 10;
    this.missles = 10;
    this.laserPos = {
      x: 115,
      y: 100,
    };
    this.misslePos = {
      x: 90,
      y: 105,
    };
    this.receiveAttack = 305;
    // this.shieldX = this.position.x;
    // this.shieldY = this.position.y;
    this.speed = 0.1;

    this.game = game;
    this.loopIndex = 0;
    this.frames = 0;
  }

  receiveDamage(atkType) {
    let dmg;
    switch (atkType) {
      case "laser":
        if (this.shields >= this.game.enemy.lasers) {
          dmg = this.game.enemy.lasers;
          this.shields -= dmg;
        } else if (this.shields - this.game.enemy.lasers < 0) {
          dmg = -(this.shields - this.game.enemy.lasers);
          this.armor -= dmg / 2;
          this.shields = 0;
          //   this.shields !== 0 &&
          //   this.shields <= this.game.enemy.lasers
          // ) {
          //   dmg = this.shields;
          //   this.shields = 0;
        } else if (this.shields === 0) {
          dmg = this.game.enemy.lasers / 2;
          this.armor -= dmg;
        }
        break;
      case "missle":
        if (this.shields > this.game.enemy.missles) {
          dmg = this.game.enemy.missles / 2;
          this.shields -= dmg;
        } else if (
          this.shields !== 0 &&
          this.shields <= this.game.enemy.missles
        ) {
          dmg = this.shields;
          this.shields = 0;
        } else if (this.shields === 0) {
          dmg = this.game.enemy.missles;
          this.armor -= dmg;
        }
      default:
        break;
    }
  }

  drawFrame(fX, fY, ctx) {
    ctx.drawImage(
      this.image,
      fX * this.width,
      fY * this.height,
      this.width,
      this.height,
      this.game.player.position.x,
      this.game.player.position.y,
      130,
      130
    );
  }

  draw(ctx) {
    if (this.frames > 5) {
      this.loopIndex += 1;
      this.frames = 0;
      this.drawFrame(this.loopIndex, 0, ctx);
    } else {
      this.drawFrame(this.loopIndex, 0, ctx);
      this.frames += 1;
    }

    if (this.loopIndex === 5) {
      this.loopIndex = 0;
    }

    // this.drawFrame(3, 0, this.position.x, this.position.y, ctx);
    // this.drawFrame(4, 0, this.position.x, this.position.y, ctx);
  }

  update(dt) {
    if (this.position.y < 210) {
      this.position.y += this.speed;
    } else {
      this.speed = -this.speed;
      this.position.y += this.speed;
    }
    if (this.position.y > 190) {
      this.position.y += this.speed;
    } else {
      this.speed = -this.speed;
      this.position.y += this.speed;
    }
  }
}
