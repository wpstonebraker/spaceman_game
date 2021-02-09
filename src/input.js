export default class HandleInput {
  constructor(card) {
    document.addEventListener("click", (e) => {
      card.action();
    });
  }
}
