import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellsPageRoutingModule } from './sells-routing.module';

import { SellsPage } from './sells.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellsPageRoutingModule
  ],
  declarations: [SellsPage]
})
export class SellsPageModule {}
