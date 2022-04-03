// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
  
function onRoomstateHandler(channel, state) {
  console.log(`* Roomstate: channel-${channel}, state-${state}`)
}
  
function onDisconnectedHandler(reason) {
  console.log(`* Disconnected from channel: ${reason}`)
}

module.exports = { onConnectedHandler, onRoomstateHandler, onDisconnectedHandler };