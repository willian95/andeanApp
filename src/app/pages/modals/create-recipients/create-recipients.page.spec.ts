import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateRecipientsPage } from './create-recipients.page';

describe('CreateRecipientsPage', () => {
  let component: CreateRecipientsPage;
  let fixture: ComponentFixture<CreateRecipientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecipientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRecipientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
