import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwoStepVerificationPage } from './two-step-verification.page';

describe('TwoStepVerificationPage', () => {
  let component: TwoStepVerificationPage;
  let fixture: ComponentFixture<TwoStepVerificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoStepVerificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwoStepVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
