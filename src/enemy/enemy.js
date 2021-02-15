import EnemyProjectile from "./enemyProjectile";
import EnemyShields from "./enemyShields";

export default class Enemy {
  constructor(game) {
    this.image = document.getElementById("img_npc1");
    this.position = {
      x: 1000,
      y: 100,
    };

    this.laserSprite = document.getElementById("img_npc1a1");
    this.missleSprite = document.getElementById("img_npc1a2");

    this.speed = 0.2;

    this.game = game;

    this.width = 256;
    this.height = 256;
    this.shields = 50;
    this.shieldCharge = 2;
    this.armor = 100;
    this.lasers = 40;
    this.missles = 40;
    this.receiveAttack = 1050;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(dt) {
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
    debugger;
    if (this.shields === 0 && this.shieldCharge > 0) {
      this.heal();
    } else if (this.shieldCharge === 0) {
      this.rechargeShields();
    } else if (this.game.player.shields > 0) {
      this.attackLasers();
    } else {
      this.attackMissles();
    }

    setTimeout(() => {
      this.game.hand.startTurn();
    }, 2500);
  }

  rechargeShields() {
    this.shieldCharge = 2;
    document.getElementById("enemy-display").innerText =
      "Recharging shield core...";
    setTimeout(() => {
      document.getElementById("enemy-display").innerText = "";
    }, 3000);
  }

  heal() {
    this.shieldCharge--;
    document.getElementById("enemy-display").innerText =
      "Enemy boosts shields by 20";
    setTimeout(() => {
      document.getElementById("enemy-display").innerText = "";
    }, 3000);
    this.shields += 20;
    this.game.elements.push(
      new EnemyShields(
        this.game.enemy.position.x - 50,
        this.game.enemy.position.y - 50,
        this.game
      )
    );
    this.game.enemyStatus.render();
  }

  attackLasers() {
    document.getElementById(
      "enemy-display"
    ).innerText = `Enemy attacks for ${this.lasers} laser damage`;
    setTimeout(() => {
      document.getElementById("enemy-display").innerText = "";
    }, 3000);
    this.game.elements.push(
      new EnemyProjectile(
        this.position.x,
        this.position.y + 190,
        this.laserSprite,
        32,
        16,
        -7,
        this.game,
        "laser"
      )
    );
  }

  attackMissles() {
    document.getElementById(
      "enemy-display"
    ).innerText = `Enemy attacks for ${this.missles} projectile damage`;
    setTimeout(() => {
      document.getElementById("enemy-display").innerText = "";
    }, 3000);
    this.game.elements.push(
      new EnemyProjectile(
        this.position.x,
        this.position.y + 120,
        this.missleSprite,
        50,
        50,
        -7,
        this.game,
        "missle"
      )
    );
  }

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
        } else if (this.shields - this.game.player.lasers < 0) {
          dmg = -(this.shields - this.game.player.lasers);
          this.armor -= dmg;
          this.shields = 0;
          type = "armor";
        } else if (this.shields === 0) {
          dmg = this.game.player.lasers / 2;
          this.armor -= dmg;
          type = "armor";
        }
        break;
      case "overcharge":
        if (this.shields >= this.game.player.lasers + 20) {
          dmg = this.game.player.lasers + 20;
          this.shields -= dmg;
          type = "shields";
        } else if (this.shields - (this.game.player.lasers + 20) < 0) {
          dmg = -(this.shields - (this.game.player.lasers + 20));
          this.armor -= dm / 2;
          this.shields = 0;
          type = "armor";
        } else if (this.shields === 0) {
          dmg = (this.game.player.lasers + 20) / 2;
          this.armor -= dmg;
          type = "armor";
        }
        break;
      case "missle":
        if (this.shields > this.game.player.missles / 2) {
          dmg = this.game.player.missles / 2;
          this.shields -= dmg;
          type = "shields";
        } else if (
          this.shields !== 0 &&
          this.shields <= this.game.player.missles
        ) {
          dmg = this.shields;
          this.shields = 0;
          type = "armor";
        } else if (this.shields === 0) {
          dmg = this.game.player.missles;
          this.armor -= dmg;
          type = "armor";
        }

      default:
        break;
    }

    document.getElementById(
      "enemy-display"
    ).innerText = `Enemy's ${type} receives ${dmg} damage!`;

    this.game.enemyStatus.render();
  }
}
