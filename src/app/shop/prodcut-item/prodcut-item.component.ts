import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-prodcut-item',
  templateUrl: './prodcut-item.component.html',
  styleUrls: ['./prodcut-item.component.scss']
})
export class ProdcutItemComponent {
@Input() product:Product
}
