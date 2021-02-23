export function collision(laser, card) {
  let laserRight = element.position.x + element.width;
  let laserY = element.position.y;
  let topLeft = card.position.y;
  let bottomLeft = card.position.y + card.height;
  let cardX = card.position.x;

  if (laserRight === cardX && laserY <= topLeft && laserY >= topRight)
    console.log("hello");
}
