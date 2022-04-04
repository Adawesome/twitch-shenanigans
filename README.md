# Twitch shenanigans

TMI-based Twitch bot to parse messages and interact with channel members.

## File Structure

```
├───src
│   ├───bot.js
│   ├───package.json
│   ├───node_modules/
│   └───utils
│       ├───commands
│       │   └───rollDice.js
│       └───events
│           ├───handlers.js
│           └───messages.js
```

### bot.js

Manages TMI client.

- connect to a Twitch channel
- observe events
  - messages
  - connect
  - roomstate
  - disconnect

### utils

Subdirectories for helper functions, event handlers, command actions, etc.
Avoids hoisting, organizes business logic, keeps ["main" file](src/bot.js) short & sweet

## References

- [Twitch TMI Overview](https://dev.twitch.tv/docs/irc#overview)
- [TMI Documentation](https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2)
