import { RestService } from './../services/rest.service';
import { Product } from './../models/product';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class ProductReposistory implements OnInit {

  products: Product[] = [];
  constructor(private restService: RestService) {
    this.restService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  ngOnInit(): void {
  }

  getProduct(id: number): Product | undefined {
    return this.products.find(i => i.id == id);
  }

  getProducts(): Product[] {
    return this.products;
  }
}
