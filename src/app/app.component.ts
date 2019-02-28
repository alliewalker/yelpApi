import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dropdown: string;
  business = null;
  location: string='';
  price: number;

  constructor(private http: HttpClient) {}

  onClick(event) {
      this.http.get<HasData>(`https://aw-yelp-api.herokuapp.com`, {
        params: new HttpParams().set('location', this.location).set('price' , this.dropdown)
      })
        .subscribe(business => {
          console.log(business)
          this.business = business;
        })
  }
}

interface HasData {
  data: any
}
