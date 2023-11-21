import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
@Input() totalCount=0;
@Input() pageSize=0;
@Output() pageChanged= new EventEmitter<number>();

onPagerChanged(event:any){
this.pageChanged.emit(event.page);
}


}
