import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../components/button/button.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterModule, ButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
