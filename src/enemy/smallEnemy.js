import Explosion from "../util/explosion";
import EnemyProjectile from "./enemyProjectile";
import EnemyShields from "./enemyShields";

export default class SmallEnemy {
  constructor(game, x, y) {
    this.game = game;
    this.image = document.getElementById("img_smallEnemy");
    this.targetImage = document.getElementById("img_smallEnemyHighlight");
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
    this.name = "Alien Scout";
    this.destroyed = false;
    this.nextAction = "Laser Attack";
  }

  draw(ctx) {
    if (!this.destroyed) {
      let playerPosY = this.game.player.position.y + 100;
      if (
        playerPosY >= this.position.y &&
        playerPosY <= this.position.y + this.size
      ) {
        this.renderStats(ctx);
        this.renderTarget(ctx);
        ctx.drawImage(
          this.targetImage,
          this.position.x,
          this.position.y,
          this.size,
          this.size
        );
      } else {
        ctx.drawImage(
          this.image,
          this.position.x,
          this.position.y,
          this.size,
          this.size
        );
      }
    }
  }

  renderStats(ctx) {
    // ctx.beginPath();
    // ctx.moveTo(this.position.x + 50, this.position.y + 70);
    // ctx.lineTo(1400, 400);
    // ctx.lineWidth = 5;
    // ctx.strokeStyle = "hsla(0, 100%, 50%, 0.25)";
    // ctx.stroke();
    ctx.fillStyle = "hsla(0, 100%, 50%, 0.25)";
    ctx.fillRect(1400, 400, 130, 70);
    ctx.fillStyle = "white";
    ctx.fillText(`Shields: ${this.shields}`, 1405, 420);
    ctx.fillText(`Armor: ${this.armor}`, 1405, 440);
    ctx.fillText(`Lasers: ${this.lasers}`, 1405, 460);

    // ctx.fillStyle = "white";
    // ctx.fillText(this.name, 970, 20);
    // ctx.fillText(
    //   `Shields: ${this.shields}     Lasers: ${this.lasers}`,
    //   1120,
    //   55
    // );
    // ctx.fillText(`Armor: ${this.armor}`, 1120, 80);
  }

  renderTarget(ctx) {
    ctx.fillStyle = "hsla(0, 100%, 50%, 1)";
    ctx.textAlign = "center";
    ctx.fillText(this.name, 1250, 30);
    ctx.fillStyle = "white";
    ctx.fillText("Next Turn:", 1250, 55);

    ctx.fillText(this.nextAction, 1250, 80);
  }

  update(dt) {
    if (this.armor <= 0 && this.position.x > 1500) {
      let idx = this.game.elements.indexOf(this);
      this.game.elements.splice(idx, 1);
      idx = this.game.enemies.indexOf(this);
      this.game.enemies.splice(idx, 1);
    } else if (this.armor <= 0) {
      this.position.x += 3;
    } else if (this.position.x > 1200) {
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

    if (this.armor <= 0) this.destroyed = true;
    // if (this.armor <= 0) {
    //   debugger;
    //   let idx = this.game.elements.indexOf(this);
    //   this.game.elements.splice(idx, 1);
    //   idx = this.game.enemies.indexOf(this);
    //   this.game.enemies.splice(idx, 1);
    // }

    // self.game.elements.push(
    //   new EnemyShields(self.position.x, self.position.y, self.game)
    // );

    document.getElementById("card-description").classList.remove("hidden");
    document.getElementById(
      "card-description-span"
    ).innerText = `Enemy's ${type} receives ${dmg} damage!`;
    // document.getElementById(
    //   "enemy-display-span"
    // ).innerText = `Enemy's armor is at ${this.armor}`;

    // this.game.enemyStatus.render();
  }

  action() {
    document.getElementById("card-description").classList.remove("hidden");
    document.getElementById(
      "card-description-span"
    ).innerText = `Enemy attacks for ${this.lasers} laser damage`;
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
