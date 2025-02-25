import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDriverFormComponent } from './delivery-driver-form.component';

describe('DeliveryDriverFormComponent', () => {
  let component: DeliveryDriverFormComponent;
  let fixture: ComponentFixture<DeliveryDriverFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryDriverFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryDriverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
