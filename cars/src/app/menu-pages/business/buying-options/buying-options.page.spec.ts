import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyingOptionsPage } from './buying-options.page';

describe('BuyingOptionsPage', () => {
  let component: BuyingOptionsPage;
  let fixture: ComponentFixture<BuyingOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyingOptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyingOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
