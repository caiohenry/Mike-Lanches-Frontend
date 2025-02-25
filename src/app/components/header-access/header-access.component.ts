import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../modules/login/services/auth.service';

@Component({
  selector: 'app-header-access',
  imports: [RouterModule],
  templateUrl: './header-access.component.html',
  styleUrl: './header-access.component.scss'
})
export class HeaderAccessComponent {

  constructor(private auth$: AuthService) {}

  logout() {
    this.auth$.logout()
  }

}
