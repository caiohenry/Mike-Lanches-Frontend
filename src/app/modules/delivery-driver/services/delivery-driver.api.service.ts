// Importing necessary components from Angular core
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment.development';
import { shareReplay } from 'rxjs';
import { ApiService } from '../../../services/api.service';
@Injectable({
  providedIn: 'root',
})
export class DeliveryDriverAPIService {
  // Base URL
  private baseUrl = `${environment.api}/delivery-driver/`;
  private $api = inject(ApiService);

  constructor(private http$: HttpClient, private fb$: NonNullableFormBuilder) { }

  // Method to get the delivery driver
  getAll(params: { page: number }) {
    return this.http$
      .get<any>(`${this.baseUrl}?${this.$api.params(params)}`)
      .pipe(shareReplay());
  }

    // Method to get the delivery driver by id
    detail(id: number) {
      return this.http$.get<any>(`${this.baseUrl}/${id}/`);
    }

    // Method to create the delivery driver
    create(form: any) {
      return this.http$.post<any>(`${this.baseUrl}/create/`, form);
    }

    // Method to update the delivery driver
    update(id: any, form: any) {
      return this.http$.patch<any>(
        `${this.baseUrl}/update/${id}/`,
        form
      );
    }

  //   // Method to delete the 
  //   delete(id: number) {
  //     return this.http$.delete<any>(
  //       `${this.baseUrl}/user/delete/${id}/`
  //     );
  //   }
}