# discord-stable-diffusion-bot
A bot that can take requests for image generation with the commands:

```
/image <prompt>
```
```
/image random
```

## Requirements

Stable Diffusion WebUI:
https://github.com/AUTOMATIC1111/stable-diffusion-webui

You can activate API endpoints by adding command line argument to executable:
```
--api
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
export COMMANDLINE_ARGS="--skip-torch-cuda-test --opt-split-attention-v1 --medvram --always-batch-cond-uncond --api"
```
Package.json
"start": "node ."

## License

MIT

---
