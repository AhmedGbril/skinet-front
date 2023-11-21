import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProdcutItemComponent } from './prodcut-item/prodcut-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ShopComponent,
    ProdcutItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
  ShopComponent
  ]
})
export class ShopModule { }
