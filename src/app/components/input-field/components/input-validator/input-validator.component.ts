import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { InputValidatorService } from './input-validator.service';

@Component({
  selector: 'ng-input-validator',
  standalone: true,
  imports: [NgIf],
  animations: [
    trigger('fade', [
      state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
      state('*', style({ transform: 'translateY(0)', opacity: 1 })),
      transition(':enter', [
        animate('100ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ transform: 'translateY(-100%)', opacity: 0 })),
      ]),
    ]),
  ],
  template: `
    <div *ngIf="errorMessage" class="input-messages" [@fade]="errorMessage">
      <i class="material-icons">error_outline</i>
      <span>{{ errorMessage }}</span>
    </div>
  `,
  styleUrl: './input-validator.component.scss',
})
export class InputValidatorComponent {
  @Input() control: FormControl | AbstractControl | null = null;
  @Input() fieldName!: string;
  @Input() disabled = false;

  constructor() {}

  get errorMessage() {
    if (this.control?.errors && this.disabled === false) {
      for (const propertyName in this.control.errors) {
        if (
          (Object.prototype.hasOwnProperty.call(
            this.control.errors,
            propertyName
          ) &&
            this.control.touched &&
            this.control.invalid) ||
          (this.control.dirty && this.control.invalid)
        ) {
          return InputValidatorService.getInputErrors(
            propertyName,
            this.control.errors[propertyName]
          );
        }
      }
    }

    return null;
  }
}
