import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/Pagination';
import { Product } from '../shared/models/Product';
import { Brands } from '../shared/models/brand';
import { Types } from '../shared/models/type';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  BaseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }



  getProduct(shopParams: ShopParams) {
    let params = new HttpParams();

    if (shopParams.brandId > 0) params = params.append('brandId', shopParams.brandId);
    if (shopParams.typeId > 0) params = params.append('typeId', shopParams.typeId);
    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pagemNumber);
    params = params.append('pageSize', shopParams.pageSize);
    if (shopParams.search) params = params.append('search', shopParams.search);

    return this.http.get<Pagination<Product[]>>(`${this.BaseUrl}product`, { params: params })
  }

  getoneProduct(id: number) {
    return this.http.get<Product>(`${this.BaseUrl}product/${id}`)
  }

  getBrands() {
    return this.http.get<Brands[]>(this.BaseUrl + 'product/brands')
  }

  getTypes() {
    return this.http.get<Types[]>(this.BaseUrl + 'product/types')
  }

}
