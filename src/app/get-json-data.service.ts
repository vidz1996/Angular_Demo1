import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class GetJsonDataService {

  constructor(private http: HttpClient) { }

  getJsonData(){
    return this.http.get('/assets/product_data.json');
  }
}
