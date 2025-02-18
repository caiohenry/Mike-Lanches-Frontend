import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-toast-message',
  imports: [ToastModule],
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.scss'
})
export class ToastMessageComponent {

}
