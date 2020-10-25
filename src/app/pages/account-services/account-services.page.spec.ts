import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountServicesPage } from './account-services.page';

describe('AccountServicesPage', () => {
  let component: AccountServicesPage;
  let fixture: ComponentFixture<AccountServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
