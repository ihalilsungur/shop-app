import { Category } from './../models/category';
import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RestService {

  baseUrl ="http://localhost:5000/";
  constructor(private httpClient :HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl+'products');
  }

  getCategories():Observable<Category[]>{
   return this.httpClient.get<Category[]>(this.baseUrl+'categories');
  }
}
