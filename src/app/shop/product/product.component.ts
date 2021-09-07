import { Product } from './../../model/models/product';
import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/models/category';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() products!:Product[];
  @Input() selectedCategory!:Category;
  constructor() { }

  ngOnInit(): void {
  console.log("Product -->:",this.selectedCategory);
  }

}
