import { ProductReposistory } from './repository/product-repository';
import { CategoryRepository } from './repository/category-repository';
import { RestService } from './services/rest.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule

  ],
  declarations: [],
  providers:[RestService,CategoryRepository,ProductReposistory]
})
export class ModelModule { }
