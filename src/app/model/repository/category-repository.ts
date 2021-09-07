import { RestService } from './../services/rest.service';
import { Category } from './../models/category';
import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class CategoryRepository implements OnInit{
 categories:Category[]=[];

 constructor(private restService:RestService){
  this.restService.getCategories().subscribe(categories =>{
    this.categories=categories;
  });
 }

  ngOnInit(): void {

  }

  getCategory(id:number):Category | undefined{
    return this.categories.find(i=>i.id==id);
  }

  getCategories(){
    return this.categories;
  }

}
