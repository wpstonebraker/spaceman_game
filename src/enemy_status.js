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
    document.getElementById("enemy-shields-num").innerText = `${this.shields}`;
  }
  renderArmor() {
    this.armor = this.game.enemy.armor;
    document.getElementById("enemy-armor-num").innerText = `${this.armor}`;
  }
}
