import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMenuPageComponent } from './item-menu-page.component';

describe('ItemMenuPageComponent', () => {
  let component: ItemMenuPageComponent;
  let fixture: ComponentFixture<ItemMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemMenuPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
