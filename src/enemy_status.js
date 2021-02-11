export default class EnemyStatus {
  constructor(game) {
    this.game = game;
    this.armor = game.enemy.armor;
    this.shields = game.enemy.shields;
    this.render();
  }

  render() {
    this.renderShields();
    this.renderArmor();
  }

  renderShields() {
    debugger;
    document.getElementById("enemy-shields-num").innerText = `${this.shields}`;
  }
  renderArmor() {
    document.getElementById("enemy-armor-num").innerText = `${this.armor}`;
  }
}
