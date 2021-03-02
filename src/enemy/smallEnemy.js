import Explosion from "../util/explosion";
import EnemyProjectile from "./enemyProjectile";
import EnemyShields from "./enemyShields";

export default class SmallEnemy {
  constructor(game, x, y) {
    this.game = game;
    this.image = document.getElementById("img_smallEnemy");
    this.position = {
      x: x,
      y: y,
    };
    this.size = 100;
    this.receiveAttackTop = this.position.y;
    this.receiveAttackBottom = this.position.y + this.size;
    this.receiveAttackX = 1200;
    this.shields = 10;
    this.armor = 10;
    this.laserSprite = document.getElementById("img_npc1a1");
    this.lasers = 5;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
  update(dt) {
    if (this.position.x > 1200) {
      this.position.x -= 3;
    }
  }

  receiveDamage(atkType) {
    let dmg;
    let type;
    switch (atkType) {
      case "laser":
        if (this.shields >= this.game.player.lasers) {
          dmg = this.game.player.lasers;
          type = "shields";
          this.shields -= dmg;
        } else if (this.shields === 0) {
          dmg = this.game.player.lasers / 2;
          this.armor -= dmg;
          type = "armor";
        } else if (this.shields - this.game.player.lasers < 0) {
          dmg = -(this.shields - this.game.player.lasers) / 2;
          this.armor -= dmg;
          this.shields = 0;
          type = "armor";
        }
        break;
      case "overcharge":
        if (this.shields >= this.game.player.lasers + 20) {
          dmg = this.game.player.lasers + 20;
          this.shields -= dmg;
          type = "shields";
        } else if (this.shields === 0) {
          dmg = (this.game.player.lasers + 20) / 2;
          this.armor -= dmg;
          type = "armor";
        } else if (this.shields - (this.game.player.lasers + 20) < 0) {
          dmg = -(this.shields - (this.game.player.lasers + 20)) / 2;
          this.armor -= dmg;
          this.shields = 0;
          type = "armor";
        }
        break;
      case "missle":
        if (this.shields > this.game.player.missles / 2) {
          dmg = this.game.player.missles / 2;
          this.shields -= dmg;
          type = "shields";
        } else if (this.shields === 0) {
          dmg = this.game.player.missles;
          this.armor -= dmg;
          type = "armor";
        } else if (
          this.shields !== 0 &&
          this.shields <= this.game.player.missles
        ) {
          dmg = this.shields;
          this.armor -= dmg;
          this.shields = 0;
          type = "armor";
        }

      default:
        break;
    }

    if (this.armor <= 0) {
      debugger;
      let idx = this.game.elements.indexOf(this);
      this.game.elements.splice(idx, 1);
      idx = this.game.enemies.indexOf(this);
      this.game.enemies.splice(idx, 1);
    }

    // self.game.elements.push(
    //   new EnemyShields(self.position.x, self.position.y, self.game)
    // );

    // document.getElementById(
    //   "enemy-display-span"
    // ).innerText = `Enemy's ${type} receives ${dmg} damage!`;
    document.getElementById(
      "enemy-display-span"
    ).innerText = `Enemy's armor is at ${this.armor}`;

    // this.game.enemyStatus.render();
  }

  action() {
    debugger;
    const angle = Math.atan2(
      this.position.y + 80 - (this.game.player.position.y + 100),
      this.position.x - (this.game.player.position.x + 50)
    );
    const velocity = {
      x: Math.cos(angle),
      y: Math.sin(angle),
    };
    this.game.projectiles.push(
      new EnemyProjectile(
        this.position.x,
        this.position.y + 80,
        this.laserSprite,
        32,
        16,
        -15,
        this.game,
        "small",
        velocity
      )
    );
  }

  renderShields() {
    this.game.elements.push(
      new EnemyShields(this.position.x, this.position.y, this.size, this.game)
    );
  }

  renderExplosion() {
    this.game.elements.push(
      new Explosion(this.position.x, this.position.y, this.game)
    );
  }

  // moveToStartPos(x, y) {
  //   const angle = Math.atan2(this.position.y - 200, this.position.x - 200);
  //   console.log(angle);
  // }
}
