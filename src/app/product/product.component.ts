import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyServisiService} from '../services/alertify-servisi.service';
import { AlertifyLochalService } from '../services/alertify-lochal.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
// import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[
    AlertifyLochalService,
    ProductService
  ]
})
export class ProductComponent implements OnInit {

  private alertifyServisi:AlertifyServisiService;
  constructor(
    alertify:AlertifyServisiService,
    private alertlchl:AlertifyLochalService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute) 
  {this.alertifyServisi=alertify }

  title = "Ürün listesi";
  araText:string="";
  products!: Product[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products = data;
      })
    })
    
  }

    ekle(urun:Product){
      // alert(urun.id+" "+ urun.name + " sepete eklendi");
      //alertify.success(urun.id+" nolu "+ urun.name + " sepete eklendi");
      this.alertifyServisi.basarili(urun.id+" nolu "+ urun.name + " sepete eklendi");
      this.alertifyServisi.dikkat(urun.id+" nolu "+ urun.name + " sepete eklendi");
      this.alertifyServisi.hata(urun.id+" nolu "+ urun.name + " sepete eklendi");
      this.alertlchl.test("Benim lochal servisim");
    }
}
