import { Fetch } from "./fetch.js"

export class Guild extends Fetch {
    constructor(token) {
        super(token);
    }

    getGuilds = () => this.get("users/@me/guilds")

    getGuild = (guild_ID) => this.get("guilds/" + guild_ID)

    getGuildChannels = (guild_ID) => this.get("guilds/" + guild_ID + "/channels")

    sendMessage = (Channel_ID, content) => this.post("channels/" + Channel_ID + "/messages", content)
    /**
     * @param {string} Channel_ID 
     * @param {string} Message_ID 
     * @param {string} emoji 
     */
    getEmojiList = (Guild_ID) => this.get(`guilds/${Guild_ID}/emojis`);
}