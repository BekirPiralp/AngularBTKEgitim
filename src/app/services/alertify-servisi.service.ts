import { Injectable } from '@angular/core';
import  *  as alertify from 'alertifyjs'; 

@Injectable({
  providedIn: 'root'
})
export class AlertifyServisiService {

  constructor() { }

  basarili(message:string):void {
    alertify.success(message);
  }

  dikkat(message:string):void{
    alertify.warning(message);
  }

  hata(message:string):void{
    alertify.error(message);
  }
}
