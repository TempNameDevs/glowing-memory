import {Bot} from "../index.js"
import { FormButton } from "../lib/forms/Buttons.js";
import { FormSelect } from "../lib/forms/Select.js";
const bot = new Bot("OTQwNzQ2MDI1MjUyMDYxMTk0.G06PzA.Ar3W-gNOQt2tDY0LF_CMxIsHv_wVmjEgmXwLfA");
const Channel_ID = "940745683999268907";
const Server_ID = "940745683999268904";
(async() => {
    const message = await bot.Guild.sendMessage(Channel_ID, {
        "content": "Interaction message for test",
        components: [
            {
                type: 1,
                components: [
                    new FormSelect({
                        custom_id: "Selector",
                        options: [{
                            label: "Hello World",
                            value: "one",
                        },{
                            label: "Konosuba is best series!",
                            value: "Konosuba"
                        },{
                            label: "Eri gei?",
                            value: "gei"
                        }]
                    })
                ]
            }
        ]
    })

    console.log(message);
})();