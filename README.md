# discord-chatgpt-bot
A bot that can respond using ChatGPT and can also generate images

## Usage

```
npm start
```

You can send prompts to the bot 
![alt text](https://i.imgur.com/dIpVNn6.png)

For image generation:
```
/image <prompt>
```
![alt text](https://i.imgur.com/tiG0qnn.png)

Or for a random image generation:
```
/image random
```
![alt text](https://i.imgur.com/GJYpiJR.png)

## Environment Variable

You need to create an environment variable with your Bot's secret Token called
```
token
```

You need to create an environment variable with your OpenAI API Key called
```
chatGPTApiKey
```

## Links and utilities

Discord Developers Portal:
https://discord.com/developers

Repl.it:
https://repl.it

Shell Code:
npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH

Package.json
"start": "node ."

Uptime Robot:
https://uptimerobot.com/

## License

MIT

---
