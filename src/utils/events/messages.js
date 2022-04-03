/**
 * Called every time a message comes in
 * @param {*} target 
 * @param {*} context 
 * @param {*} msg 
 * @param {*} self 
 * @returns 
 */
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot
  // Remove whitespace from chat message
  const commandName = msg.trim();
  // If the command is known, let's execute it
  if (commandName === '!dice') {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

module.exports = { onMessageHandler };