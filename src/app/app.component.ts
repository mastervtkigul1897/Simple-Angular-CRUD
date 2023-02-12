import { FreeapiService } from './services/freeapi.service';
import { Component } from '@angular/core';
import { Products } from './classes/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiIntegration';

  constructor(private _freeApiService: FreeapiService){}

  productList?: Products[] = [];

  ngOnInit(){
    this._freeApiService.getProducts().subscribe(
      data => { this.productList = data; console.log(data)}
    )
  };
}
