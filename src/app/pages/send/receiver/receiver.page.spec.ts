import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceiverPage } from './receiver.page';

describe('ReceiverPage', () => {
  let component: ReceiverPage;
  let fixture: ComponentFixture<ReceiverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceiverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
