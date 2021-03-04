import Dud from "../cards/dud";
import Animation from "../util/animation";
import Explosion from "../util/explosion";
import EnemyProjectile from "./enemyProjectile";
import EnemyShields from "./enemyShields";

export default class Enemy {
  constructor(game, x, y) {
    this.image = document.getElementById("img_npc1");
    this.position = {
      x: x,
      y: y,
    };

    this.laserSprite = document.getElementById("img_npc1a1");
    this.missleSprite = document.getElementById("img_npc1a2");
    this.dudSprite = document.getElementById("img_malwareAni");

    this.speed = 0.2;

    this.game = game;

    this.width = 256;
    this.height = 256;
    this.shields = 50;
    this.shieldCharge = 2;
    this.armor = 100;
    this.lasers = 20;
    this.missles = 20;
    this.receiveAttackTop = this.position.y;
    this.receiveAttackBottom = this.position.y + this.height;
    this.receiveAttackX = 1150;
    this.special = 1;
    this.destroyed = false;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    if (this.position.x === 1100) {
      ctx.fillStyle = "#6f6";
      ctx.textAlign = "left";
      ctx.fillText(`Big Boss`, 1350, 200);
      ctx.fillStyle = "white";
      ctx.fillText(
        `Shields: ${this.shields}     Lasers: ${this.lasers}`,
        1350,
        240
      );
      ctx.fillText(`Armor: ${this.armor}`, 1350, 260);
    }
  }

  update(dt) {
    if (this.destroyed) this.y -= 10;
    if (this.position.x > 1100) this.position.x -= 1;
    if (this.position.y < 120) {
      this.position.y += this.speed;
    } else {
      this.speed = -this.speed;
      this.position.y += this.speed;
    }
    if (this.position.y > 80) {
      this.position.y += this.speed;
    } else {
      this.speed = -this.speed;
      this.position.y += this.speed;
    }
    // if (this.position.y > 100 && this.position.y < 130) {
    //   this.position.y -= this.speed;
    // } else {
    //   this.position.y -= this.speed;
    // }
  }

  action() {
    const rand = Math.random();

    // if (rand < 1) {
    if (rand < 0.33) {
      this.dudCards();
      // setTimeout(() => {
      //   this.game.hand.startTurn();
      // }, 2500);
      return;
    }

    if (this.shields === 0 && this.shieldCharge > 0) {
      this.heal();
    } else if (this.shieldCharge === 0) {
      this.rechargeShields();
    } else if (this.game.player.shields > 0) {
      this.attackLasers();
    } else {
      this.attackMissles();
    }

    // setTimeout(() => {
    //   this.game.hand.startTurn();
    // }, 2500);
  }

  dudCards() {
    this.game.hand.deck.push(new Dud(this.game));
    this.game.hand.deck.push(new Dud(this.game));
    this.game.hand.deck.push(new Dud(this.game));
    this.game.elements.push(
      new Animation(this.dudSprite, 50, 0, 64, 64, 12, 6, this.game)
    );
    document.getElementById("enemy-display-span").innerText =
      "3 Malware cards uploaded to player's deck.";
  }

  rechargeShields() {
    this.shieldCharge = 2;
    document.getElementById("enemy-display-span").innerText =
      "Recharging shield core...";
    setTimeout(() => {
      document.getElementById("enemy-display-span").innerText = "";
    }, 3000);
  }

  heal() {
    this.shieldCharge--;
    document.getElementById("enemy-display-span").innerText =
      "Enemy boosts shields by 20";
    setTimeout(() => {
      document.getElementById("enemy-display-span").innerText = "";
    }, 3000);
    this.shields += 20;
    this.game.target = this;
    this.game.elements.push(
      new EnemyShields(
        this.game.enemy.position.x - 50,
        this.game.enemy.position.y - 50,
        256,
        this.game
      )
    );
    // this.game.enemyStatus.render();
  }

  attackLasers() {
    document.getElementById(
      "enemy-display-span"
    ).innerText = `Enemy attacks for ${this.lasers} laser damage`;
    setTimeout(() => {
      document.getElementById("enemy-display-span").innerText = "";
    }, 3000);
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
        "laser",
        velocity
      )
    );
  }

  attackMissles() {
    document.getElementById(
      "enemy-display-span"
    ).innerText = `Enemy attacks for ${this.missles} projectile damage`;
    setTimeout(() => {
      document.getElementById("enemy-display-span").innerText = "";
    }, 3000);
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
        this.missleSprite,
        50,
        50,
        -10,
        this.game,
        "missle",
        velocity
      )
    );
  }

  special() {}

  receiveDamage(atkType) {
    let dmg;
    let type;
    debugger;
    switch (atkType) {
      case "laser":
        if (this.shields >= this.game.player.lasers) {
          dmg = this.game.player.lasers;
          type = "shields";
          this.shields -= dmg;
        } else if (this.shields === 0) {
          debugger;
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
          this.shields = 0;
          type = "armor";
        }

      default:
        break;
    }

    document.getElementById(
      "enemy-display-span"
    ).innerText = `Enemy's ${type} receives ${dmg} damage!`;

    // this.game.enemyStatus.render();
  }

  renderShields() {
    debugger;
    this.game.elements.push(
      new EnemyShields(this.position.x, this.position.y, 256, this.game)
    );
  }

  renderExplosion(x, y) {
    this.game.elements.push(new Explosion(x, y, this.game));
  }
}
