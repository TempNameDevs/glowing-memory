import { Fetch } from "./fetch";

export declare class Reactions extends Fetch{
    constructor(token: string);
    getReactions(channel_ID: string, message_ID: string): Promise<any>
    addReaction(channel_ID: string, message_ID: string, emoji: string): Promise<void>
}