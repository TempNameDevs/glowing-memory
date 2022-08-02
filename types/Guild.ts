export interface Guilds{
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
    permissions: string;
    features: string[];
}

export interface Guild{
    id: string;
    name: string;
    icon: string | null;
    description: string | null;
    splash: string | null;
    discovery_splash: string | null;
    features: string[];
    banner: string | null;
    owner_id: string;
    application_id: string | null;
    region: string;
    afk_channel_id: string | null;
    afk_timeout: number;
    system_channel_id: string | null;
    widget_enabled: boolean;
    widget_channel_id: string | null;
    verification_level: number;
    roles: role[];
    default_message_notifications: number;
    mfa_level: number;
    explicit_content_filter: number;
    max_presences: number;
    max_members: number;
    max_video_channel_users: number;
    max_stage_video_channel_users: number;
    vanity_url_code: string | null;
    premium_subscription_count: number;
    premium_tier: number;
    system_channel_flags: number;
    preferred_locale: string;
    rules_channel_id: string | null;
    public_updates_channel_id: string | null;
    hub_type: string | null;
    premium_progress_bar_enabled: boolean;
    nsfw: boolean;
    nsfw_level: number;
}

export interface role{
    id: string;
    name: string;
    permissions: string;
    color: number;
    hoist: boolean;
    mentionable: boolean;
    icon: string | null;
    flags: number;
}
export interface Channel{
    id: string;
    last_message_id: string | null;
    type: number;
    name: string;
    position: number;
    flags: number;
    parent_id: string | null;
    topic: string | null;
    guild_id: string;
    permission_overwrites: string[];
    rate_limit_per_user: number;
    nsfw: boolean;
}