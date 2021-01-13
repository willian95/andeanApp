import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaceIdPage } from './face-id.page';

describe('FaceIdPage', () => {
  let component: FaceIdPage;
  let fixture: ComponentFixture<FaceIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceIdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaceIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
