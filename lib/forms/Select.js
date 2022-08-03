export class FormSelect{
    type = 3;
    custom_id;
    options;
    placeholder;
    min_values;
    max_values;
    disabled;

    constructor(options){
        this.custom_id = options.custom_id;
        this.options = options.options;
        this.disabled = options.disabled;
        this.min_values = options.min_values;
        this.max_values = options.max_values;
        this.placeholder = options.placeholder;
    }

    setCustom_id = (custom_id) => this.custom_id = custom_id;
    setOptions = (options) => this.options = options;
    setPlaceholder = (placeholder) => this.placeholder = placeholder;
    setMin_Values  = (min_values) => this.min_values = min_values;
    setMax_Values  = (max_values) => this.max_values = max_values;
    setDisabled    = (disabled) => this.disabled = disabled;

}