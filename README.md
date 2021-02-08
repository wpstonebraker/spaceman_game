spaceman is a simple turn-based, deck building game, similar to Slay the Spire and Monster Train, albeit a much liter version

As these games are not the most mainstream, a brief description of gameplay follows:

"The player character is a spaceship, with shields, armor, energy, and weapons(lasers and missles). The player begins every turn with 3 energy points, and draws 5 cards from their deck. When a card is played, energy is used (for example a "fire weapon" card could cost 1 energy, while a "recharge shield" card could cost 2 energy). A turn ends when the player clicks "end turn", usually after expending all energy or using all available cards.

The non-player-characters (or NPCs) will display their amount of shields and armor, as well as a preview for what type of action they will dispatch when it becomes the NPC's turn. NPCs actions will be determined by logic, based of game conditions (for example, when shields < 50% it will dispatch a heal action). The computers turn is over when it has completed its action.

Combat is completed when a character has reached 0 armor.

Functionality & MVP

"combat" will be turn-based

- at the start of a turn, a player's "energy" is reset to max (default: 3)
- energy is used to dispatch card actions
  - cards have different action costs
- when turn ends, enemies will dispatch their actions
- if players armor reaches 0, game is over
- if player defeats all enemies, combat is over

end of combat

- players shields are recharged
- players are prompted to add a new card to their deck

-I will use canvas for rendering the game
-I will use open source pixel sprites to populate the game, along with pixelorama to create new sprites of my own

game.js - will house the logic for the game
player.js - will house the logic for the player character
levels.js - will house the logic for the different encounters/battles
cards.js - parent class for individual cards. when clicked, it alerts the user to confirm the action, then invokes the cards action. - individual cards will inherit from cards.js, but output their specific properties

Day 1

- accumulate image assets to render
- begin rendering some assets to make sure everything will work as intended

Day2

- build out logic for non-card entities, and populate the canvas. This includes the player-character(PC), the non-player-character(NPV), and the game.js which will handle the game.

Day 3

- create the card class and basic card logic, populate the individual card subclasses

Day 4

- continue buliding out cards
- add animations, effects to card actions

Day 5

- complete production readme

Bonus Features:

- Multiple NPCs per level
- Add stat modifiers, items you can acquire to increase dmg or shield capacity, etc.
