import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../domain/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private collection: AngularFirestoreCollection<Product>;
  public products: Observable<Product[]>;
  constructor(private firestore: AngularFirestore) { }

  get(onlyActive: boolean) {
    if (onlyActive)
      this.collection = this.firestore.collection<Product>('products', p => p.where('active', '==', onlyActive));
    else 
      this.collection = this.firestore.collection<Product>('products');
      
    this.products = this.collection.valueChanges({ idField: 'id'});

    return this.products;
  }
  
  add(product: Product) {
    return this.collection.add(product);
  }

  patch(product: Product) {
    return this.collection.doc(product.id).update(product);
  }
}
