import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation-page',
  imports: [HeaderComponent, RouterModule],
  templateUrl: './navigation-page.component.html',
  styleUrl: './navigation-page.component.scss'
})
export class NavigationPageComponent {

  constructor(private router$: Router, private auth$: AuthService) {

    if (auth$.isUserLogged()) {
      router$.navigateByUrl('dashboard');
    } else {
      router$.navigateByUrl('home');
    }
    
  }
  
}
