import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckPhonePersonPage } from './check-phone-person.page';

describe('CheckPhonePersonPage', () => {
  let component: CheckPhonePersonPage;
  let fixture: ComponentFixture<CheckPhonePersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPhonePersonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckPhonePersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
