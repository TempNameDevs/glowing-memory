export class FormInput {
  type: number;
  custom_id: string;
  label: string;
  style: number;
  min_length: number;
  max_length: number;
  required: boolean;
  value: string;
  placeholder: string;

  constructor(options: {
    type: number;
    custom_id: string;
    label: string;
    style: number;
    min_length: number;
    max_length: number;
    required: boolean;
    value: string;
    placeholder: string;
  });

  SetCustom_id(value: string): void;
  SetLabel(value: string): void;
  /**
   * 
   * Number 0 - Is Short
   * Number 1 - Is Paragraph
   */
  SetStyle(value: 0 | 1): void;
  SetMin_Length(value: number): void;
  SetMax_Length(value: number): void;
  SetRequired(value: boolean): void;
  SetValue(value: string): void;
  SetPlaceholder(value: string): void;
}
