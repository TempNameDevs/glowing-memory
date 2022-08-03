export class FormButton{
    type: number;
    label?: string;
    style: number;
    emoji?: string;
    custom_id?: string;
    url?: string;
    disabled?: boolean;
    constructor(configuration: {style: number, label?: string, emoji?: string, custom_id?: string, url?: string, disabled?: boolean})

    setStyle     (style: number): void;
    setCustom_id (custom_id: string): void
    setDisabled  (disabled: boolean): void
    setLabel     (label: string): void
    setUrl       (url: string): void
    setEmoji     (emoji: string): void 
}