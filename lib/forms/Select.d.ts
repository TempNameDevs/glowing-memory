export interface selectOptions {
  label: string;
  value: string;
  description?: string;
  emoji?: any;
  default?: boolean;
}

export class FormSelect {
  type: number;
  custom_id: string;
  options: selectOptions[];
  placeholder?: string;
  min_values?: number;
  max_values?: number;
  disabled?: boolean;

  constructor(options: {
    type: number;
    custom_id: string;
    options: selectOptions[];
    placeholder?: string;
    min_values?: number;
    max_values?: number;
    disabled?: boolean;
  });

  setCustom_id  (custom_id: string):         void;
  setOptions    (options: selectOptions[]):  void;
  setPlaceholder(placeholder: string):       void;
  setMin_Values (min_values: number):        void;
  setMax_Values (max_values: number):        void;
  setDisabled   (disabled: boolean):         void;
}
