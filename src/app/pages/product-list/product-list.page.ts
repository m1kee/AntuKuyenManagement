import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from 'src/app/domain/domain';
import { ProductCrudPage } from '../product-crud/product-crud.page';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  products: Product[] = [];
  onlyActive: boolean = true;
  
  constructor(private modalController: ModalController, private productService: ProductService) { }

  ngOnInit() {
   this.getProducts(); 
  }

  async getProducts() {
    this.productService.get(this.onlyActive).subscribe((products:Product[]) => {
      // console.log('products: ', products);
      this.products = products;
    });
  }

  async openProductModal(product: Product) {
    const modal = await this.modalController.create({
      component: ProductCrudPage,
      componentProps: {
        product: product
      }
    });

    await modal.present();
  };

  async onOnlyActiveChange() {
    // console.log('onOnlyActiveChange');
    this.getProducts();
  }
}
