import { AbstractControl, FormGroup } from '@angular/forms';

export interface DeliveryDriver {

    user_name: string | null;
    user_email: string | null;
    user_password: string | null;

}

export interface DeliveryDriverGroup extends FormGroup {
    value: DeliveryDriver;

    controls: {
        [key in keyof DeliveryDriver]: AbstractControl;
    };
}