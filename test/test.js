import {Bot} from "../index.js"

const bot = new Bot("OTQwNzQ2MDI1MjUyMDYxMTk0.GcyRNl.vhl_vvUCIroqhG3yMtTE4-deJ9HBrHkgZtVK2Q");//Si , deja mando uno para testing
const Channel_ID = "940745683999268907";
(async() => {
    const message = await bot.sendMessage(Channel_ID, {
        content: "This is a test message, with reaction"
    })
    await bot.addReaction(Channel_ID, message.id, "👍")
    await bot.addReaction(Channel_ID, message.id, "🙃")
})()