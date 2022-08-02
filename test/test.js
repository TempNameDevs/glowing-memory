import {Bot} from "../index.js"
import {settings} from "../settings.js"
const bot = new Bot(settings.token);
const Channel_ID = "940745683999268907";
const Server_ID = "940745683999268904";
(async() => {
    const message = await bot.Guild.sendMessage(Channel_ID, {
        content: "Hello World",
        embed: {
            title: "Hello World",
            description: "This is a test embed",
            color: 0x00ff00
        },
        components: [{
            "type": 1,
            "components": [
                {
                    "type": 2,
                    "label": "Click me!",
                    "style": 1,
                    "custom_id": "click_one"
                }
            ]
        }]
    })

    console.log(message);
})();