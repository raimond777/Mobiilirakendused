import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimalDetailPage } from './animal-detail.page';

describe('AnimalDetailPage', () => {
  let component: AnimalDetailPage;
  let fixture: ComponentFixture<AnimalDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
