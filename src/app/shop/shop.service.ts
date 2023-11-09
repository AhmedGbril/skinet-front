import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/Pagination';
import { Product } from '../shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
BaseUrl='https://localhost:5001/api/';

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<Pagination<Product[]>>(`${this.BaseUrl}product`)
  }
}
