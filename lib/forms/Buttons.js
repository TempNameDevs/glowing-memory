export class FormButton{
    type = 2;
    label;
    style;
    emoji;
    custom_id;
    url;
    disabled;
    constructor({style, label, emoji, custom_id, url, disabled}){
        this.style = style;
        this.disabled = disabled;
        this.custom_id = custom_id;
        this.emoji = emoji;
        this.url = url;
        this.label = label;
    }

    setStyle    = (style) => this.style = style;
    setCustom_id = (custom_id) => this.custom_id = custom_id;
    setDisabled = (disabled) => this.disabled = disabled;
    setLabel    = (label) => this.label = label;
    setUrl      = (url) => this.url = url;
    setEmoji    = (emoji) => this.emoji = emoji 
}