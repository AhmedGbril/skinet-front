import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Skinet';
  Products :any[]=[];

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5001/api/product?pagesize=50').subscribe(
      {
        next:(response:any)=>this.Products=response.data,
        error:rr=> console.log(rr),
        complete:()=>{
          console.log('requset Completed');
          console.log('extra statment'); 
        }
      }
    )
  }

}
