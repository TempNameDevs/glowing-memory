interface APIEmbedField {
	/**
	 * Name of the field
	 *
	 * Length limit: 256 characters
	 */
	name: string;
	/**
	 * Value of the field
	 *
	 * Length limit: 1024 characters
	 */
	value: string;
	/**
	 * Whether or not this field should display inline
	 */
	inline?: boolean;
}

export interface APIEmbed {
	/**
	 * Title of embed
	 *
	 * Length limit: 256 characters
	 */
	title?: string;
	/**
	 * Type of embed (always "rich" for webhook embeds)
	 *
	 * @deprecated *Embed types should be considered deprecated and might be removed in a future API version*
	 *
	 * See https://discord.com/developers/docs/resources/channel#embed-object-embed-types
	 */
	type?: EmbedType;
	/**
	 * Description of embed
	 *
	 * Length limit: 4096 characters
	 */
	description?: string;
	/**
	 * URL of embed
	 */
	url?: string;
	/**
	 * Timestamp of embed content
	 */
	timestamp?: string;
	/**
	 * Color code of the embed
	 */
	color?: number;
	/**
	 * Footer information
	 *
	 * See https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
	 */
	footer?: APIEmbedFooter;
	/**
	 * Image information
	 *
	 * See https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
	 */
	image?: APIEmbedImage;
	/**
	 * Thumbnail information
	 *
	 * See https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
	 */
	thumbnail?: APIEmbedThumbnail;
	/**
	 * Video information
	 *
	 * See https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
	 */
	video?: APIEmbedVideo;
	/**
	 * Provider information
	 *
	 * See https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure
	 */
	provider?: APIEmbedProvider;
	/**
	 * Author information
	 *
	 * See https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
	 */
	author?: APIEmbedAuthor;
	/**
	 * Fields information
	 *
	 * Length limit: 25 field objects
	 *
	 * See https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
	 */
	fields?: APIEmbedField[];
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-types
 * @deprecated *Embed types should be considered deprecated and might be removed in a future API version*
 */
 enum EmbedType {
	/**
	 * Generic embed rendered from embed attributes
	 */
	Rich = 'rich',
	/**
	 * Image embed
	 */
	Image = 'image',
	/**
	 * Video embed
	 */
	Video = 'video',
	/**
	 * Animated gif image embed rendered as a video embed
	 */
	GIFV = 'gifv',
	/**
	 * Article embed
	 */
	Article = 'article',
	/**
	 * Link embed
	 */
	Link = 'link',
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
 */
 interface APIEmbedThumbnail {
	/**
	 * Source url of thumbnail (only supports http(s) and attachments)
	 */
	url: string;
	/**
	 * A proxied url of the thumbnail
	 */
	proxy_url?: string;
	/**
	 * Height of thumbnail
	 */
	height?: number;
	/**
	 * Width of thumbnail
	 */
	width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
 */
 interface APIEmbedVideo {
	/**
	 * Source url of video
	 */
	url?: string;
	/**
	 * Height of video
	 */
	height?: number;
	/**
	 * Width of video
	 */
	width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
 */
 interface APIEmbedImage {
	/**
	 * Source url of image (only supports http(s) and attachments)
	 */
	url: string;
	/**
	 * A proxied url of the image
	 */
	proxy_url?: string;
	/**
	 * Height of image
	 */
	height?: number;
	/**
	 * Width of image
	 */
	width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure
 */
 interface APIEmbedProvider {
	/**
	 * Name of provider
	 */
	name?: string;
	/**
	 * URL of provider
	 */
	url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
 */
 interface APIEmbedAuthor {
	/**
	 * Name of author
	 *
	 * Length limit: 256 characters
	 */
	name: string;
	/**
	 * URL of author
	 */
	url?: string;
	/**
	 * URL of author icon (only supports http(s) and attachments)
	 */
	icon_url?: string;
	/**
	 * A proxied url of author icon
	 */
	proxy_icon_url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
 */
 interface APIEmbedFooter {
	/**
	 * Footer text
	 *
	 * Length limit: 2048 characters
	 */
	text: string;
	/**
	 * URL of footer icon (only supports http(s) and attachments)
	 */
	icon_url?: string;
	/**
	 * A proxied url of footer icon
	 */
	proxy_icon_url?: string;
}
