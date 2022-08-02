import * as GuildI from '../types/Guild';
import { Fetch } from './fetch';
import * as Message  from '../types/Message';
export declare class Guild extends Fetch {
    constructor(token: string)
    /**
     * Get a guild by ID.
     * @param {string} guildID The ID of the guild.
     * @returns {Promise<Guild>}
     */
    getGuild(guildID: string): Promise<GuildI.Guild>;
    
    getGuilds(): Promise<GuildI.Guilds[]>;

    getGuildChannels(guild_id: string): Promise<GuildI.Channel[]>;
    sendMessage(channel_id: string, content: Message.MessageContent): Promise<Message.Message>; 
    getEmojiList(guild_id: string): Promise<any[]>;
}