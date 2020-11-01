import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeMailPage } from './change-mail.page';

describe('ChangeMailPage', () => {
  let component: ChangeMailPage;
  let fixture: ComponentFixture<ChangeMailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeMailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeMailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
