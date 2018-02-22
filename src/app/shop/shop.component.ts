import { Component, OnInit } from '@angular/core';
import { GetJsonDataService } from '../get-json-data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private _data: GetJsonDataService, private route: ActivatedRoute, private router: Router) { }

  prod=null;
  ngOnInit() {
    this._data.getJsonData().subscribe(res => this.prod = res);
  }
  sendMeHome(){
    this.router.navigate(['']);
  }

}
