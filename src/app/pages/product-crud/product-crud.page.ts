import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from 'src/app/domain/domain';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.page.html',
  styleUrls: ['./product-crud.page.scss'],
})
export class ProductCrudPage implements OnInit {

  product: Product;

  constructor(private modalController: ModalController, private productService: ProductService) { }

  ngOnInit() {
    if (!this.product)
      this.product = {
        active: true,
        stock: 0,
        price: 0,
        sendPrice: 0,
        wholesalePrice: 0,
        wholesaleGarments: 0
      };
  }

  dismiss() {
    this.modalController.dismiss();
  }

  saveProduct() {
    if (this.product.id)
    {
      this.productService.patch(this.product).then(() => {
        this.modalController.dismiss()
      })
      .catch(() => {
        console.log('ocurrio un error al actualizar el producto');
      });
    }
    else {
      this.productService.add(this.product).then(() => {
        this.modalController.dismiss()
      })
      .catch(() => {
        console.log('ocurrio un error al guardar el producto');
      });
    }
  }
}
