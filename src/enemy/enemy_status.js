export default class EnemyStatus {
  constructor(game) {
    this.game = game;

    this.render();
  }

  render() {
    this.renderShields();
    this.renderArmor();
  }

  renderShields() {
    this.shields = this.game.enemy.shields;
    this.armor = this.game.enemy.armor;
    document.getElementById(
      "enemy-shields-num"
    ).innerText = `Enemy Shields: ${this.shields} Enemy Armor: ${this.armor}`;
  }
  renderArmor() {
    // document.getElementById("enemy-armor-num").innerText = `${this.armor}`;
  }
}
