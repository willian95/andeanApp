import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyAccountCompanyPage } from './verify-account-company.page';

describe('VerifyAccountCompanyPage', () => {
  let component: VerifyAccountCompanyPage;
  let fixture: ComponentFixture<VerifyAccountCompanyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyAccountCompanyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyAccountCompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
