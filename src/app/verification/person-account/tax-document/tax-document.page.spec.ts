import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaxDocumentPage } from './tax-document.page';

describe('TaxDocumentPage', () => {
  let component: TaxDocumentPage;
  let fixture: ComponentFixture<TaxDocumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxDocumentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaxDocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
