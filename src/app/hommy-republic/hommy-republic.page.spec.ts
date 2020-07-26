import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HommyRepublicPage } from './hommy-republic.page';

describe('HommyRepublicPage', () => {
  let component: HommyRepublicPage;
  let fixture: ComponentFixture<HommyRepublicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HommyRepublicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HommyRepublicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
