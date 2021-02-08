export default class HandleInput {
  constructor(card) {
    debugger;
    document.addEventListener("click", (e) => {
      card.action();
    });
  }
}
