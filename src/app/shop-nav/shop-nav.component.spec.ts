
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ShopNavComponent } from './shop-nav.component';

describe('ShopNavComponent', () => {
  let component: ShopNavComponent;
  let fixture: ComponentFixture<ShopNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [ShopNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
