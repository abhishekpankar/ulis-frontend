import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateEncryptedQrComponent } from './generate-encrypted-qr.component';

describe('GenerateEncryptedQrComponent', () => {
  let component: GenerateEncryptedQrComponent;
  let fixture: ComponentFixture<GenerateEncryptedQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateEncryptedQrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateEncryptedQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
