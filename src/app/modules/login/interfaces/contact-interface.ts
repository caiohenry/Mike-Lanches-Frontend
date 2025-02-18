import { AbstractControl, FormGroup } from '@angular/forms';

export interface Contact {

    name_contact: string | null;
    email_contact: string | null;
    message_contact: string | null;

}

export interface ContactGroup extends FormGroup {
    value: Contact;

    controls: {
        [key in keyof Contact]: AbstractControl;
    };
}