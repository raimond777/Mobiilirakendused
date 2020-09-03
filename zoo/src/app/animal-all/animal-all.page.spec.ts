import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimalAllPage } from './animal-all.page';

describe('AnimalAllPage', () => {
  let component: AnimalAllPage;
  let fixture: ComponentFixture<AnimalAllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalAllPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
