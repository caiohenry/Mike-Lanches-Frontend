
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly httpOptions: any;

  constructor(protected http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  params(params: object) {
    console.log(params);
    return Object.entries(params)
      .filter((p) => p[1] !== undefined && p[1] !== null)
      .map((p) => `${p[0]}=${encodeURIComponent(p[1])}`)
      .join('&');
}
}

export interface ApiInterface {
  page: number;
  filter?: string;
  sortField?: string;
  sortOrder?: number;
  status?: string;
}