import { Fetch } from "./lib/fetch";
import { Guild } from "./lib/guild";
import { Reactions } from "./lib/reactions";
export as namespace Glowing_Memory;

import * as Message  from "./types/Message";
export class Bot{
    #token: string;
    Guild: Guild;
    Reactions: Reactions
}
