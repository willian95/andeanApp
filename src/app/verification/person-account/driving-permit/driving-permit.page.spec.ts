import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrivingPermitPage } from './driving-permit.page';

describe('DrivingPermitPage', () => {
  let component: DrivingPermitPage;
  let fixture: ComponentFixture<DrivingPermitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivingPermitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrivingPermitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
