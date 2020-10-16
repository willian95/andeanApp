import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyCompanyPage } from './verify-company.page';

describe('VerifyCompanyPage', () => {
  let component: VerifyCompanyPage;
  let fixture: ComponentFixture<VerifyCompanyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyCompanyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyCompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
