# discord-stable-diffusion-bot
A bot that can take requests for image generation.

![alt text](https://i.imgur.com/3ABpEvZ.jpg)

It can generate images using the commands:

```
/image <prompt>
```
```
/image random
```

## Requirements

Stable Diffusion web UI:
https://github.com/AUTOMATIC1111/stable-diffusion-webui

You can activate API endpoints by adding command line argument to executable:
```
--api
```
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

POST Request Payload:
```json
payload = {
    "prompt": "Futuristic Vintage Medium Shot 1920's Poster with Cyberpunk, ovni,  tron biker with helmet bike, black in color, with a cyberpunk city background, futuristic lighting, cinematic lighting, cozy lighting, 8k, cinematic poster vintage 1800s",
    "steps": 20,
    "negative_prompt": "",
    "sampler_name": "DDIM",
    "cfg_scale": 7,
    "seed": -1,
    "width":512,
    "height":512
}
```

API URL:
```
'{url}/sdapi/v1/png-info'
```

command Line Args I used for Fast Gen in a M1 Mac:
```
export COMMANDLINE_ARGS="--no-half --skip-torch-cuda-test --opt-split-attention-v1 --medvram --always-batch-cond-uncond --api --cors-allow-origins=http://127.0.0.1:7860"
```
Package.json
"start": "node ."

## License

MIT

---
