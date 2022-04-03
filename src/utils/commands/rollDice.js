/**
 * Function called when the "dice" command is issued. Generates a random number between 1 and SIDES. 
 * Defaults to 6 to mimic a classic 6-sided die.
 * @param {number} sides The upper bound limit to roll. This number does not need to strictly abide by real dice side limitations.
 * @returns {number} The randomly generated value
 */
function rollDice (sides=6) {
    const SIDES = sides;
    return Math.floor(Math.random() * SIDES) + 1;
  }

module.exports = {rollDice};