import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepublicPagePage } from './republic-page.page';

describe('RepublicPagePage', () => {
  let component: RepublicPagePage;
  let fixture: ComponentFixture<RepublicPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepublicPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepublicPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
