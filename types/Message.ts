import { APIEmbed } from "./embed";

export interface Message {
    id: string;
    channel_id: string;
    content?: string;
    type?: number;
    author: {
        id: string;
        username: string;
        discriminator: string;
        avatar?: string;
        public_flags?: number;
        bot?: boolean;
        avatar_decoration?: string;
    }
    embeds?: APIEmbed[];
    tts?: boolean;
    pinned?: boolean;
    timestamp?: string;
    edited_timestamp?: string;
    flags?: number;
    referenced_message?: message_reference[]

    /**
     * @todo: Add empty field for attachments, mentions_roles. Type Arrays
     */
}
enum ComponentType{
    ActionRow = 0,
    Button = 1,
    Select = 2,
    Input = 3
}
enum ButtonStyle{
    Default = 0,
    Secondary = 1,
    Success = 2,
    Danger = 3,
    Link = 4
}
enum InputStyle{
    Default = 0,
    Pagragraph = 1
}
interface Component{
    type: ComponentType;
    components?: {
        min_length?: number;
        max_length?: number;
        placeholder?: string;
        required?: boolean;
        value?: string;
        type: ComponentType;
        label? : string;
        url? : string;
        disabled? : boolean;
        style: ButtonStyle | InputStyle;
        custom_id: string;
        emoji?: string;
        max_values?: number;
        min_values?: number;
        options?: {
            label: string;
            value: string;
            description?: string;
            emoji?: {
                name: string;
                id: string;
            };
        }[];
    }[],
}
export interface message_reference{
    channel_id: string;
    message_id: string;
    guild_id: string;
    fail_if_not_existing: boolean;
}
export interface MessageContent{
    content?: string;
    tts?: boolean;
    //allowed_mentions: string;
    message_reference?: message_reference;
    embeds?: APIEmbed[];
    // @todo: add more fields
    payload_json?: string;
    flags?: number;
    components?: Component[];
}