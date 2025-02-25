import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../../components/header/header.component';
import { HeaderAccessComponent } from "../../../../components/header-access/header-access.component";

@Component({
  selector: 'app-access-page',
  imports: [RouterModule, HeaderAccessComponent],
  templateUrl: './access-page.component.html',
  styleUrl: './access-page.component.scss'
})
export class AccessPageComponent {

}
