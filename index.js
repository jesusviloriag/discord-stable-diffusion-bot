import express from "express";
import bodyParser from 'body-parser';
import { ChatGPTAPI } from 'chatgpt'
import { Configuration, OpenAIApi } from 'openai';

const app = express();

const sDUrl = 'http://127.0.0.1:7860/sdapi/v1/txt2img';

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(80, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("ChatGPTBot running");
  const mySecret = process.env['token']
})

import Discord from "discord.js";
import { GatewayIntentBits, Partials, Attachment } from 'discord.js';
const client = new Discord.Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
  ],
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.MessageReaction,
    Partials.User,
    Partials.GuildMessages,
    Discord.PartialGroupDMChannel
  ]
});

client.on('messageCreate', async (message) => {
  console.log(message);
  if (message && message.content && !message.author.bot) {
    
    let content = message.content;

    if (content.startsWith('/image')) {
      const configuration = new Configuration({
        apiKey: process.env['chatGPTApiKey']
      });
      const openai = new OpenAIApi(configuration);

      let parts = content.split(' ');
      parts.shift(); // parts is modified to remove first word
      let result;
      if (parts instanceof Array) {
        result = parts.join(' ');
      }
      else {
        result = parts;
      }

      if (result.startsWith('random')) {

        const api = new ChatGPTAPI({
          apiKey: process.env['chatGPTApiKey']
        });
        const res = await api.sendMessage("generate a random sentence describing something with a background and a random drawing style");  //request random text prompt from ChatGPT
        
        const payload = {
          "prompt": res.text,
          "steps": 20,
          "negative_prompt": "",
          "sampler_name": "DDIM",
          "cfg_scale": 7,
          "seed": -1,
          "width":512,
          "height":512
        }

        fetch(sDUrl, {  //We request image from local Stable Diffusion server
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        }).then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);

          if(responseJson.images) {
            const base64Image = responseJson.images[0];

            const sfbuff = new Buffer.from(base64Image, "base64");

            message.channel.send({
              files: [{
                  attachment: sfbuff,
                  name: 'image.png'
              }],
              content: res.text,
            });
          }
          
        })

      } else {
        const payload = {
          "prompt": result,
          "steps": 20,
          "sampler_name": "DDIM",
          "cfg_scale": 7,
          "seed": -1,
          "width":512,
          "height":512
        }

        fetch(sDUrl, {  //We request image from local Stable Diffusion server
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        }).then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);

          if(responseJson.images) {
            const base64Image = responseJson.images[0];

            const sfbuff = new Buffer.from(base64Image, "base64");

            message.channel.send({
              files: [{
                  attachment: sfbuff,
                  name: 'image.png'
              }],
              content: result,
            });
            
          }
          
        })
      }
    }
    
  }
})

client.on('ready', () => {
  console.log("ChatGPTBot is running...");
});

client.login(process.env['token']);
