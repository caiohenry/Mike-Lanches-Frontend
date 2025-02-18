import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {

  @Output() btnClick = new EventEmitter<void>();

  onClick() {
    this.btnClick.emit();
  }
  
  @Input() suffixIcon: boolean = false;
  @Input() prefixIcon: boolean = false;
  @Input() label!: string;
  @Input() iconName!: string;
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input({ required: true }) typeBtn:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'warning'
    | 'outline-delete'
    | 'outline-confirm'
    | 'outline-edit'
    | 'outline-clear'
    | 'delete-file'
    | 'info-document'
    | 'help'
    | 'nav'
    | 'login'
    | 'outline-primary'
    | 'register'
    | 'outline-white'
    | 'outline-white-toggle'
    | 'outline' = 'primary';

  constructor() { }

  ngOnInit(): void {

   }
}