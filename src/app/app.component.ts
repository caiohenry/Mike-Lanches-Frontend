import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from './services/loading.service';
import { LoadingComponent } from './components/loading/loading.component';
import { AsyncPipe } from '@angular/common';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingComponent, AsyncPipe, ToastMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mike-lanches-web';

  loadingService = inject(LoadingService);


  loading$ = this.loadingService.loading$;

  
}
