import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnotherPersonPage } from './another-person.page';

describe('AnotherPersonPage', () => {
  let component: AnotherPersonPage;
  let fixture: ComponentFixture<AnotherPersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherPersonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnotherPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
