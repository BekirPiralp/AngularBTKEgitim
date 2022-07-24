import { Injectable } from '@angular/core';
import *as alertify from 'alertifyjs';

@Injectable()
export class AlertifyLochalService {

  constructor() { }

  test(message:string):void{
    alertify.message(message);
  }
}
