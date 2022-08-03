export class FormInput
{
    type = 4
    custom_id;
    label;
    characters;
    style;
    min_length;
    max_length;
    required;
    value;
    placeholder;


    constructor(options){
    this.custom_id = options.custom_id;
    this.label = options.label;
    this.characters = options.characters;
    this.style = options.style;
    this.min_length = options.min_length;
    this.max_length = options.max_length;
    this.required = options.required;
    this.value = options.value;
    this.placeholder = options.placeholder;
    }

    SetCustom_id = (value) => this.custom_id = value;
    SetLabel = (value) => this.label = value;
    SetCharacters = (value) => this.characters = value;
    SetStyle = (value) => this.style = value;
    SetMin_Length = (value) => this.min_length = value;
    SetMax_Length = (value) => this.max_length = value;
    SetRequired = (value) => this.required = value;
    SetValue = (value) => this.value = value;
    SetPlaceholder = (value) => this.placeholder = value;
}