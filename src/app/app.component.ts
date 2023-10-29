import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Skinet';

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5001/api/product').subscribe(
      {
        next:(response:any)=>console.log(response),
        error:rr=> console.log(rr),
        complete:()=>{
          console.log('requset Completed');
          console.log('extra statment'); 
        }
      }
    )
  }

}
