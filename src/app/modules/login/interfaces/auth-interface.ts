import { AbstractControl, FormGroup } from '@angular/forms';

export interface Auth {

    user_email: string | null;
    user_password: string | null;

}

export interface TokenAuth {
    access: string;
    refresh: string;
}

export interface AuthGroup extends FormGroup {
    value: Auth;

    controls: {
        [key in keyof Auth]: AbstractControl;
    };
}