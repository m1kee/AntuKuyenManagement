import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from 'src/app/domain/domain';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.page.html',
  styleUrls: ['./product-crud.page.scss'],
})
export class ProductCrudPage implements OnInit {

  product: Product = new Product(); 

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  saveProduct() {
    this.modalController.dismiss({
      id: 'soy un producto',
      name: 'Producto de prueba'
    });
  }

  onColorChange($event) {
    console.log('onColorChange: ', $event);
  }
}
