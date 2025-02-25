import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAccessComponent } from './header-access.component';

describe('HeaderAccessComponent', () => {
  let component: HeaderAccessComponent;
  let fixture: ComponentFixture<HeaderAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
