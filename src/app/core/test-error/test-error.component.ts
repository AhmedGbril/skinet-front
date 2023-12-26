import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent {
  baseUrl=environment.apiUrl;
  
  constructor(private http:HttpClient) {}

  get404Erorr(){
    this.http.get(this.baseUrl+'protudct/42').subscribe(
      {
        next:response=>console.log(response),
        error:error=>console.log(error)
      }
    )
  }
  get400Erorr(){
    this.http.get(this.baseUrl+'Buggy/badrequest').subscribe(
      {
        next:response=>console.log(response),
        error:error=>console.log(error)
      }
    )
  }
  get400ValidationError(){
    this.http.get(this.baseUrl+'product/fourtytwo').subscribe(
      {
        next:response=>console.log(response),
        error:error=>console.log(error)
      }
    )
  }
  get500Erorr(){
    this.http.get(this.baseUrl+'buggy/servererror').subscribe(
      {
        next:response=>console.log(response),
        error:error=>console.log(error)
      }
    )
  }
}
