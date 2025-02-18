export interface AutoCompleteFieldConfig {
  /**
   * The suggestions to be displayed in the autocomplete dropdown
   * @type {unknown[]}
   * @required
   *
   */
  suggestions: unknown[];
  /**
   * The field to be used as the label for the suggestions
   * @type {string}
   * @optional
   */
  field?: string;

  completeMethod?: (event: unknown) => unknown[];
  /**
   * If should display the dropdown button
   * @type {boolean}
   * @optional
   */
  dropdown?: boolean;
  /**
   * If should force the selection of an item from the dropdown or can accept custom values
   * @type {string}
   * @optional
   */
  force_selection?: boolean;

  its_grouped?: boolean;

  /**
   * The message to be displayed when the autocomplete is empty
   * @type {string}
   * @optional
   */
  empty_message?: string;
}

export interface DropdownFieldConfig {
  options: unknown[];
  option_label?: string;
  option_value?: string;
}

export interface TextAreaFieldConfig {
  rows?: number;
  cols?: number;
}

export interface PasswordFieldConfig {
  feedback?: boolean;
  toggle_mask?: boolean;

  prompt_label?: string;
  weak_label?: string;
  medium_label?: string;
  strong_label?: string;

  medium_regex?: RegExp;
  strong_regex?: RegExp;
}
