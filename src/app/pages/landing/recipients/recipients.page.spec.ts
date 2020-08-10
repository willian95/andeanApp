import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipientsPage } from './recipients.page';

describe('RecipientsPage', () => {
  let component: RecipientsPage;
  let fixture: ComponentFixture<RecipientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
