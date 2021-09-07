import { Product } from './../../model/models/product';
import { CategoryRepository } from './../../model/repository/category-repository';
import { ProductReposistory } from './../../model/repository/product-repository';
import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/models/category';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  selectedCategory:Category=new Category();
  constructor(private productRepository: ProductReposistory, private categoryRepository: CategoryRepository) {

  }
  ngOnInit(): void {

  }
 get products():Product[]{

   if(this.selectedCategory.id!>0){
     return this.productRepository.getProducts().filter(x =>x.categoryId == this.selectedCategory.id);
   }

   return this.productRepository.getProducts();
 }

 get categories():Category[]{
   return  this.categoryRepository.getCategories();;
 }

 test(category: any){
  this.selectedCategory = category
 }
}


