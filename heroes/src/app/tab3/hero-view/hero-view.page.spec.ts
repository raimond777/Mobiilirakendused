import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeroViewPage } from './hero-view.page';

describe('HeroViewPage', () => {
  let component: HeroViewPage;
  let fixture: ComponentFixture<HeroViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
