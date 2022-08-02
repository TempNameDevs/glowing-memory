import {Fetch} from "./discord.js"

export class Bot{
    #fetch;
    url = "https://discord.com/api/v10/";
    constructor(token){
        this.#fetch = new Fetch(token);
    }

    getGuilds = () => this.#fetch.get(this.url + "users/@me/guilds")
    
    getGuild = (guild_ID) => this.#fetch.get(this.url  +  "guilds/"  + guild_ID)
    
    getGuildChannels = (guild_ID) => this.#fetch.get(this.url  +  "guilds/"  + guild_ID + "/channels")

    sendMessage = (Channel_ID, content) => this.#fetch.post(this.url + "channels/" + Channel_ID + "/messages", content)
    /**
     * @param {string} Channel_ID 
     * @param {string} Message_ID 
     * @param {string} emoji 
     */
    addReaction = (Channel_ID, Message_ID, emoji) => this.#fetch.put(`${this.url}channels/${Channel_ID}/messages/${Message_ID}/reactions/${emoji}/@me`, false)
    getEmojiList = (Guild_ID) => this.#fetch.get(`${this.url}guilds/${Guild_ID}/emojis`);

}

