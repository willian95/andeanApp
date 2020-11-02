import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EasyAccessPage } from './easy-access.page';

describe('EasyAccessPage', () => {
  let component: EasyAccessPage;
  let fixture: ComponentFixture<EasyAccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyAccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EasyAccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
