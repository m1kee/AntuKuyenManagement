import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from 'src/app/domain/domain';
import { ProductCrudPage } from '../product-crud/product-crud.page';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  products: Product[] = [];
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async openProductModal(product: Product) {
    const modal = await this.modalController.create({
      component: ProductCrudPage,
      componentProps: {
        product: product
      }
    });

    modal.onWillDismiss().then((product) => {
      if (product.data){
        let index = this.products.findIndex((c) => c.id === product.data.id);

        if (index > -1){
          this.products.splice(index, 1, product.data);
        }
        else {
          this.products = [...this.products, product.data];
        }
        
      }
    });

    await modal.present();
  }
}
