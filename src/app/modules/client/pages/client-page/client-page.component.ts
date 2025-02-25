import { Component } from '@angular/core';
import { InputFieldComponent } from '../../../../components/input-field/input-field.component';
import { TableComponent } from '../../../../components/table/table.component';
import { FormControl } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { TableColumns } from '../../../../components/table/models/table.model';
import { environment } from '../../../../environments/environment.development';
import { AsyncPipe } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { ButtonComponent } from '../../../../components/button/button.component';
import { PageTitleComponent } from '../../../../components/page-title/page-title.component';

@Component({
  selector: 'app-client-page',
  imports: [InputFieldComponent, TableComponent, AsyncPipe, ButtonComponent, PageTitleComponent],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.scss'
})
export class ClientPageComponent {

  tableNotifications: TableColumns[] = [
    { field: 'user_name', header: 'Nome', width: '15%', icon: 'person', hide_field: 'sm', },
    { field: 'user_email', header: 'Email', width: '20%', icon: 'email', hide_field: 'sm', },
    { field: 'user_phone', header: 'Telefone', width: '40%', icon: 'phone' }
  ];

  listNotifications$!: Observable<any>;
  loading: boolean = false;

  searchControl = new FormControl();

  constructor(private service$: ClientService) {}

  getNotifications(params: any) {
    console.log(params);

    this.loading = true;
    this.listNotifications$ = this.service$.getAll(params).pipe(
      tap(() => this.loading = false
      )
    );

  }



}
