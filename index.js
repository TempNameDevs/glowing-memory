import { Guild } from "./lib/guild.js";
import { Reactions } from "./lib/reactions.js";

export class Bot{
    #token;
    Guild
    Reactions;
    constructor(token){
        this.#token = token;
        this.Reactions = new Reactions(this.#token);
        this.Guild = new Guild(this.#token);
    }
}