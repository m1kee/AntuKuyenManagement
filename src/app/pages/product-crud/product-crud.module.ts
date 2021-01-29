import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductCrudPageRoutingModule } from './product-crud-routing.module';

import { ProductCrudPage } from './product-crud.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductCrudPageRoutingModule
  ],
  declarations: [ProductCrudPage]
})
export class ProductCrudPageModule {
}
