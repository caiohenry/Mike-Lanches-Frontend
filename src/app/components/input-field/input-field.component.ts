import { JsonPipe, NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  booleanAttribute,
  inject,
  input
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { InputValidatorComponent } from './components/input-validator/input-validator.component';
import {
  AutoCompleteFieldConfig,
  DropdownFieldConfig,
  PasswordFieldConfig,
  TextAreaFieldConfig,
} from './models/input-config.interface';

@Component({
  selector: 'ng-input-field',
  standalone: true,
  imports: [
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    AutoCompleteModule,
    PasswordModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgxMaskDirective
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent {
  // Default input field properties
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type:
    | 'text'
    | 'password'
    | 'autocomplete'
    | 'dropdown'
    | 'number'
    | 'textarea' = 'text';
  @Input() icon: string = '';
  @Input({ required: true }) control!: any;
  @Input() key: string = '';
  @Input() mask = '';
  @Input() prefix = '';
  @Input() suffix = '';

  $el = inject(ElementRef);

  // Additional input field properties
  readonly = input(false, { transform: booleanAttribute });
  required = input(true, { transform: booleanAttribute });

  @Input({ transform: booleanAttribute }) hide_label: boolean = false;
  @Input({ transform: booleanAttribute }) hide_errors: boolean = false;

  @Input() config_password: PasswordFieldConfig | null = null;
  @Input() config_autocomplete: AutoCompleteFieldConfig | null = null;
  @Input() config_dropdown: DropdownFieldConfig | null = null;
  @Input() config_textarea: TextAreaFieldConfig | null = null;

  getErrorMessages(): string[] {
    if (!this.control || !this.control.errors) {
      return [];
    }

    const errorMessages: { [key: string]: string } = {
      required: 'Campo obrigatório.',
      email: 'Email inválido.',
      minlength: `Mínimo de caracteres não atingido.`,
      maxlength: `Máximo de caracteres excedido.`,
      pattern: 'Formato inválido.',
    };

    return Object.keys(this.control.errors).map(errorKey => errorMessages[errorKey] || 'Erro desconhecido.');
  }

}