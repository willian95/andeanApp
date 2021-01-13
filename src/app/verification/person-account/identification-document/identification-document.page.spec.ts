import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdentificationDocumentPage } from './identification-document.page';

describe('IdentificationDocumentPage', () => {
  let component: IdentificationDocumentPage;
  let fixture: ComponentFixture<IdentificationDocumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificationDocumentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdentificationDocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
