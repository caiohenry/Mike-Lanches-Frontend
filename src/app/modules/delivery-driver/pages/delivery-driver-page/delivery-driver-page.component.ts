import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { TableColumns } from '../../../../components/table/models/table.model';
import { ItemMenuService } from '../../../login/services/item-menu.service';
import { DeliveryDriverAPIService } from '../../services/delivery-driver.api.service';
import { AsyncPipe } from '@angular/common';
import { ButtonComponent } from '../../../../components/button/button.component';
import { InputFieldComponent } from '../../../../components/input-field/input-field.component';
import { PageTitleComponent } from '../../../../components/page-title/page-title.component';
import { TableComponent } from '../../../../components/table/table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-driver-page',
  imports: [InputFieldComponent, TableComponent, AsyncPipe, ButtonComponent, PageTitleComponent],
  templateUrl: './delivery-driver-page.component.html',
  styleUrl: './delivery-driver-page.component.scss'
})
export class DeliveryDriverPageComponent {

  tableNotifications: TableColumns[] = [
      { field: 'delivery_driver_name', header: 'Nome', width: '15%', icon: 'person', hide_field: 'sm', },
      { field: 'delivery_driver_email', header: 'Email', width: '20%', icon: 'email', hide_field: 'sm', },
      { field: 'delivery_driver_phone', header: 'Telefone', width: '40%', icon: 'phone' }
    ];
  
    listNotifications$!: Observable<any>;
    loading: boolean = false;
  
    searchControl = new FormControl();
  
    constructor(private service$: DeliveryDriverAPIService, private router$: Router) {}
  
    getNotifications(params: any) {

      this.loading = true;
      this.listNotifications$ = this.service$.getAll(params).pipe(
        tap(() => this.loading = false
        )
      );
  
    }

    goToForm() {
      this.router$.navigateByUrl('/delivery-driver-form')
    }

}
