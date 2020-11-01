import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourBalancePage } from './your-balance.page';

describe('YourBalancePage', () => {
  let component: YourBalancePage;
  let fixture: ComponentFixture<YourBalancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourBalancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourBalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
