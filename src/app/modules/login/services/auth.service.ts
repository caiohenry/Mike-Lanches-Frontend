// Importing necessary components from Angular core
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Auth, AuthGroup } from '../interfaces/auth-interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    // Base URL
    private baseUrl = environment.api;

    constructor(
        private fb$: FormBuilder,
        private http$: HttpClient,
        private jwt$: JwtHelperService,
        private route$: Router
    ) { }

    // Method to create the login form
    getForm() {
        return this.fb$.group({
            user_email: [null, [Validators.required, Validators.maxLength(255), Validators.email]],
            user_password: [null, [Validators.required, Validators.maxLength(255)]],
        }) as AuthGroup;
    }

    // Method to send the login form to the API
    postForm(form: Auth) {
        return this.http$.post<any>(`${this.baseUrl}/token-auth/`, form);
    }

    // Method to set the token in the local storage
    setToken(token: any) {
        this.access = token.access;
        this.refresh = token.refresh;
        sessionStorage.removeItem('closed_lead');
    }

    get remember_me() {
        return localStorage.getItem('remember_me') || 'false';
    }

    // Method to set the token in the local storage
    set access(token: string) {
        if (this.remember_me == 'true') localStorage.setItem('access', token);
        else sessionStorage.setItem('access', token);
    }

    // Method to get the token from the local storage
    get access() {
        return (
            localStorage.getItem('access') || sessionStorage.getItem('access') || ''
        );
    }

    // Method to get the refresh token from the local storage
    get refresh() {
        return (
            localStorage.getItem('refresh') || sessionStorage.getItem('refresh') || ''
        );
    }

    set refresh(token: string) {
        if (this.remember_me == 'true') localStorage.setItem('refresh', token);
        else sessionStorage.setItem('refresh', token);
    }

    get name_user() {
        return this.decodeToken(this.access).name_user;
    }

    get email_user() {

        return this.decodeToken(this.access).email_user;

    }

    get isStaff() {
        return this.decodeToken(this.access).is_staff;
    }

    isUserLogged() {
        // Check if the token is valid
        if (this.isTokenInvalid(this.access)) {
            if (this.isTokenInvalid(this.refresh)) {
                this.logout();
                return false;
            } else {
                this.refreshToken();
                return true;
            }
        }
        return true;
    }

    logoutPost() {
        return this.http$.post(`${this.baseUrl}/logout/`, {})
    }

    // Method to remove the tokens from the local storage
    logout() {
        this.logoutPost().subscribe({
            next: data => {
                //   this.msg$.addMsg('success', 'Sucesso!', 'Logout efetuado com sucesso!');
            }
        })

        localStorage.setItem('visible', JSON.stringify(true));
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        sessionStorage.removeItem('access');
        sessionStorage.removeItem('refresh');
        sessionStorage.removeItem('closed_lead');
        sessionStorage.removeItem('status_client');
        this.route$.navigateByUrl('/login');
    }

    // Method to check if the token is valid
    isTokenInvalid(token: string) {
        return this.jwt$.isTokenExpired(token);
    }

    // Method to refresh the token
    refreshToken(): void | Subscription {
        if (this.isTokenInvalid(this.refresh)) {
            //   this.msg$.addNotificationByMgs(this.msg$.messages['auth']['expired']);
            // this.logout();
            return;
        }
        return this.http$
            .post<any>(`${this.baseUrl}token-refresh/`, {
                refresh: this.refresh,
            })
            .subscribe({
                next: (response: any) => {
                    this.access = response.access;
                },
            });
    }

    // Method to decode the token
    decodeToken(token: string) {
        return this.jwt$.decodeToken(token);
    }

}

