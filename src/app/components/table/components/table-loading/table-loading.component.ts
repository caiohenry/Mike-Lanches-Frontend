import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'ng-table-loading',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './table-loading.component.html',
  styleUrl: './table-loading.component.scss',
})
export class TableLoadingComponent {
  
    is_loading = true;
     // Lottie options
     options_lottie: AnimationOptions = {
      path: '/app/assets/lottie/loading.json',
      loop: true,
      autoplay: true
    };
}
