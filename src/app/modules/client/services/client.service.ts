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
export class ClientService {
  // Base URL
  private baseUrl = `${environment.api}/user/`;
  private $api = inject(ApiService);

  constructor(private http$: HttpClient, private fb$: NonNullableFormBuilder) { }

  // Method to get the Collaborator
  getAll(params: { page: number }) {
    return this.http$
      .get<any>(`${this.baseUrl}?${this.$api.params(params)}`)
      .pipe(shareReplay());
  }

  //   // Method to get the Collaborator by id
  //   detailCollaborator(id: number) {
  //     return this.http$.get<any>(`${this.baseUrl}/user/${id}/`);
  //   }

  //   // Method to create the Collaborator
  //   createCollaborator(form: any) {
  //     return this.http$.post<any>(`${this.baseUrl}/user/create/`, form);
  //   }

  //   // Method to update the Collaborator
  //   updateCollaborator(id: any, form: any) {
  //     return this.http$.patch<any>(
  //       `${this.baseUrl}/user/update/${id}/`,
  //       form
  //     );
  //   }

  //   // Method to delete the Collaborator
  //   deleteCollaborator(id: number) {
  //     return this.http$.delete<any>(
  //       `${this.baseUrl}/user/delete/${id}/`
  //     );
  //   }
}