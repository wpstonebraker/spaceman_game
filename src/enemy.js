import Projectile from "./projectile";

export default class Enemy {
  constructor(game) {
    this.image = document.getElementById("img_npc1");
    this.position = {
      x: 1000,
      y: 100,
    };

    this.sprite = document.getElementById("img_npc1a1");

    this.speed = 0.2;

    this.game = game;

    this.width = 256;
    this.height = 256;
    this.shields = 50;
    this.armor = 100;
    this.lasers = 20;
    this.missles = 20;
    this.receiveAttack = this.position.x;
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
    if (this.shields < 25) {
      this.heal();
    } else if (this.game.player.shields > 0) {
      this.attackLasers();
    } else {
      this.attackMissles();
    }
  }

  heal() {
    this.shields += 5;
  }

  attackLasers() {
    this.game.player.shields -= this.lasers;
    this.game.elements.push(
      new Projectile(
        this.position.x,
        this.position.y,
        this.sprite,
        32,
        16,
        -7,
        this.game
      )
    );
    this.game.playerStatus.render();
  }

  attackMissles() {
    this.game.player.armor -= this.missles;
    this.game.playerStatus.render();
  }
}
