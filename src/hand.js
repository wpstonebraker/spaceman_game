import Card from "./card";
import Attack from "./cards/attack";
import Recharge from "./cards/recharge";

export default class Hand {
  constructor(game) {
    this.height = 300;
    this.width = game.gameWidth * 0.7;
    this.position = {
      x: 20,
      y: game.gameHeight - this.height - 20,
    };
    this.game = game;
    debugger;
    // const STARTING_CARDS = [Attack, Attack, Attack, Attack, Recharge];
    this.cards = [];
    this.init();
  }

  init() {
    debugger;
    // while (this.cards.length < 3) {
    //   this.cards.push(
    //     STARTING_CARDS[~~(Math.random() * STARTING_CARDS.length + 1)]
    //   );
    // }
    // cards.forEach((card, i) => {
    //   const offset = 20 + i * this.game.card.width;
    //   card.draw(this.game, { x: offset, y: game.hand.position.y + 10 });
    // });
    for (let i = 1; i < 4; i++) {
      const offset = 20 + i * 200;
      this.cards.push(new Recharge(this.game, { x: offset, y: 300 }));
    }
    debugger;
  }
  draw(ctx) {
    debugger;
    // debugger;
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillRect(this.position.x, this.position.y, 300, 300);
    this.cards.forEach((card) => card.draw(ctx));
  }
}
