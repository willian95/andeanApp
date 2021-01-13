import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFundsDetailPage } from './add-funds-detail.page';

describe('AddFundsDetailPage', () => {
  let component: AddFundsDetailPage;
  let fixture: ComponentFixture<AddFundsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFundsDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFundsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
