import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCarDialogComponentComponent } from './buy-car-dialog-component.component';

describe('BuyCarDialogComponentComponent', () => {
  let component: BuyCarDialogComponentComponent;
  let fixture: ComponentFixture<BuyCarDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCarDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCarDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
