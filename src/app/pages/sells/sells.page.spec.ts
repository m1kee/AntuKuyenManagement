import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellsPage } from './sells.page';

describe('SellsPage', () => {
  let component: SellsPage;
  let fixture: ComponentFixture<SellsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
