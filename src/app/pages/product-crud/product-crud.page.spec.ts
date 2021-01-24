import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductCrudPage } from './product-crud.page';

describe('ProductCrudPage', () => {
  let component: ProductCrudPage;
  let fixture: ComponentFixture<ProductCrudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCrudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
