import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent {

  @Input() nameItem!: string;
  @Input() descriptionItem!: string;
  @Input() imagePathItem!: string;

}
