import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDriverPageComponent } from './delivery-driver-page.component';

describe('DeliveryDriverPageComponent', () => {
  let component: DeliveryDriverPageComponent;
  let fixture: ComponentFixture<DeliveryDriverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryDriverPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryDriverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
