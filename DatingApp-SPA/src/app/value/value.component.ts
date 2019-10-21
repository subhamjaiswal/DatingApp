import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
  providers : [HttpClient]
})
export class ValueComponent implements OnInit {
values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues()
  {
    this.http.get('https://localhost:44305/api/values').subscribe(response =>{
       this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
