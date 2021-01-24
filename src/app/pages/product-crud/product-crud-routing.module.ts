import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCrudPage } from './product-crud.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCrudPageRoutingModule {}
