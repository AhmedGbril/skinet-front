import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:Product;
  constructor(private shopservice:ShopService,private activeRouter:ActivatedRoute){}
  ngOnInit(): void {
    this.getProdut();
  }

  getProdut(){
    const id= this.activeRouter.snapshot.paramMap.get('id');
    if(id) 
    this.shopservice.getoneProduct(+id).subscribe({
      next:(res)=>{
        this.product=res
        console.log(this.product);
        
      },

      error:err=>console.log(err)
    })
  }

}
