import { Component, ElementRef, OnInit, Type, ViewChild } from '@angular/core';
import { Product } from '../shared/models/Product';
import { ShopService } from './shop.service';
import { Brands } from '../shared/models/brand';
import { Types } from '../shared/models/type';
import { ShopParams } from '../shared/models/shopParams';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('search') searchTerm?: ElementRef;
  Products: Product[] = [];
  brands: Brands[] = [];
  types: Types[] = [];
  shopParams = new ShopParams();
  sortOptions = [
    { name: "Alphabetical", value: "name" },
    { name: "Price:Low to High", value: "PriceAsc" },
    { name: "Price:High to Low", value: "PriceDesc" }
  ];
  totalCount = 0;


  constructor(private shopservice: ShopService) { }
  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }
  getProducts() {
    this.shopservice.getProduct(this.shopParams).subscribe({
      next: response => {
        this.Products = response.data
        this.shopParams.pageSize = response.pageSize
        this.shopParams.pagemNumber = response.pageIndex
        this.totalCount = response.count
      },
      error: err => console.log(err)
    });
  }
  getBrands() {
    this.shopservice.getBrands().subscribe({
      next: response => this.brands = [{ id: 0, name: "ALL" }, ...response],
      error: err => console.log(err)
    });
  }
  getTypes() {
    this.shopservice.getTypes().subscribe({
      next: response => this.types = [{ id: 0, name: "ALL" }, ...response],
      error: err => console.log(err)
    });
  }

  onBrandSelected(brandId: number) {
    this.shopParams.brandId = brandId;
    this.shopParams.pagemNumber=1;
    this.getProducts();
  }
  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopParams.pagemNumber=1;
    this.getProducts();
  }
  onSortSelected(event: any) {
    this.shopParams.sort = event.target.value;
    this.getProducts();
  }

  onPageChanged(event: any) {
    if (this.shopParams.pagemNumber !== event)
      this.shopParams.pagemNumber = event;
    this.getProducts();
  }

  onSearch() {
    this.shopParams.search = this.searchTerm?.nativeElement.value;
    this.shopParams.pagemNumber=1;
    this.getProducts();
  }
  onRest() {
    if (this.searchTerm)
      this.searchTerm.nativeElement.value = '';

    this.shopParams = new ShopParams();
    this.getProducts();
  }

}
