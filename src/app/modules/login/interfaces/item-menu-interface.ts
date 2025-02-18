import { AbstractControl, FormGroup } from '@angular/forms';

export interface ItemMenu {

    name_item_menu: string | null;
    description_item_menu: string | null;
    image_item_menu: string | null;

}

export interface ItemMenuGroup extends FormGroup {
    value: ItemMenu;

    controls: {
        [key in keyof ItemMenu]: AbstractControl;
    };
}