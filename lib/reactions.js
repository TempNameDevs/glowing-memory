import { Fetch } from "./fetch.js";
export class Reactions extends Fetch{
    constructor(token){
        super(token);
    }
    
    getReactions = (channel, message, emoji) => this.get(`/channels/${channel}/messages/${message}/reactions/${emoji}`);
    addReaction = (Channel_ID, Message_ID, emoji) => this.put(`/channels/${Channel_ID}/messages/${Message_ID}/reactions/${emoji}/@me`, undefined, false)
    
}