import { Component } from '@angular/core';
import { ItemMenuService } from '../../services/item-menu.service';
import { ItemMenuComponent } from '../../../../components/item-menu/item-menu.component';
import { ItemMenu } from '../../interfaces/item-menu-interface';


@Component({
  selector: 'app-menu-page',
  imports: [ItemMenuComponent],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss'
})
export class MenuPageComponent {

  // Declarate variables
    itemMenuList: ItemMenu[] = [];
  
    // Constructor initializes
    constructor(private $service: ItemMenuService) {
  
    }
  
  
    ngOnInit(): void {
  
      this.$service.getAll({ page: 0 }).subscribe({
        next: (data) => {
          this.itemMenuList = data.message.items;
        }
      })
  
    }

}
