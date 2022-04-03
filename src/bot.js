const tmi = require('tmi.js');
const events = require('./utils/events/handlers');
const { onMessageHandler } = require('./utils/events/messages');
const { rollDice } = require('./utils/commands');
require('dotenv').config()

// Define configuration options
const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [
    process.env.CHANNEL_NAME
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
// https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md
client.on('message', onMessageHandler);
client.on('connected', events.onConnectedHandler);
client.on('roomstate', events.onRoomstateHandler);
client.on('disconnected', events.onDisconnectedHandler);

// Connect to Twitch:
client.connect();
