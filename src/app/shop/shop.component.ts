import { Component ,OnInit } from '@angular/core';
import { Product } from '../shared/models/Product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  Products:Product[]=[];
  constructor(private shopservice:ShopService){}
  ngOnInit(): void {
    this.shopservice.getProduct().subscribe({
      next: response=> this.Products= response.data,
      error: err=>console.log(err)
    })
  }




}
