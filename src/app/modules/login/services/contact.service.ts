// Importing necessary components from Angular core
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact, ContactGroup } from '../interfaces/contact-interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class ContactService {

  // Base URL
  private baseUrl = environment.api + '/contact';

  constructor(
    private fb$: FormBuilder,
    private http$: HttpClient
  ) { }

  // Method to create the contact form
  getForm() {
    return this.fb$.group({
      name_contact: [null, [Validators.required, Validators.maxLength(255)]],
      email_contact: [null, [Validators.required, Validators.email, Validators.maxLength(255)]],
      message_contact: [null, [Validators.required, Validators.maxLength(550)]],
    }) as ContactGroup;
  }

  // Method to send the contact form to the API
  postForm(form: Contact) {
    return this.http$.post<any>(`${this.baseUrl}/create/`, form, {
      headers: {
        'skip-auth': 'true',
      },
    });
  }

}

