import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from './../model/model.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  imports: [
    CommonModule,
    ModelModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    ShopComponent,
    NavbarComponent,
    ProductComponent,
    CategoryComponent
  ],
  exports:[ShopComponent]
})
export class ShopModule { }
