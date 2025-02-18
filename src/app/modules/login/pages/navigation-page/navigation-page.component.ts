import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-page',
  imports: [HeaderComponent, RouterModule],
  templateUrl: './navigation-page.component.html',
  styleUrl: './navigation-page.component.scss'
})
export class NavigationPageComponent {

}
