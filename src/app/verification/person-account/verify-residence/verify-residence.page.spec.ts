import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyResidencePage } from './verify-residence.page';

describe('VerifyResidencePage', () => {
  let component: VerifyResidencePage;
  let fixture: ComponentFixture<VerifyResidencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyResidencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyResidencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
