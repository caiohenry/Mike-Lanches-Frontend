// Importing necessary components from Angular core
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';
import { DeliveryDriverGroup } from '../interfaces/delivery-driver-interface';

@Injectable({
    providedIn: 'root',
})
export class DeliveryDriverFormService {

    constructor(
        private fb$: FormBuilder
    ) { }

    // Method to create the login form
    getForm() {
        return this.fb$.group({
            user_email: [null, [Validators.required, Validators.maxLength(255), Validators.email]],
            user_password: [null, [Validators.required, Validators.maxLength(255)]],
            user_name: [null, [Validators.required, Validators.maxLength(255)]]
        }) as DeliveryDriverGroup;
    }

}

