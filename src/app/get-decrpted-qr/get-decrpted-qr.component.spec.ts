import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDecrptedQrComponent } from './get-decrpted-qr.component';

describe('GetDecrptedQrComponent', () => {
  let component: GetDecrptedQrComponent;
  let fixture: ComponentFixture<GetDecrptedQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDecrptedQrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDecrptedQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
