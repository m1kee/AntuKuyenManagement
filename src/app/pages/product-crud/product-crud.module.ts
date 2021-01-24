import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { IonicModule } from '@ionic/angular';

import { ProductCrudPageRoutingModule } from './product-crud-routing.module';

import { ProductCrudPage } from './product-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductCrudPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [ProductCrudPage]
})
export class ProductCrudPageModule {
}
