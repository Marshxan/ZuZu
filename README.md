# BTMC Discord Bot

BTMC is a GeneralPurpose discord bot

## Wanna make BTMC your own?
Create a directory then copy the updater directory into it. So the tree looks like so:

```
ZuZu_clone/
  updater/
    runOnce.js
    autoRunUpdate.js
    update.js
```

Then run the runOnce.js file, this will download the most up to date version of the source and package files there is.

You can now do one of two things

### Auto Update
To have your bot auto-update to the newest version
Keep updater/autoRunUpdate.js running at all times from the root directory
Use nodemon to run the index.js file

### Manually update
Run the bot however you like but when you see a new version run the runOnce.js file.
