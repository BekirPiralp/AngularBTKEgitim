import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable,throwError } from 'rxjs';
import { tap,catchError} from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/products";

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data)) ), //loglama
      catchError(this.handleError) // hata ayıklama
    );
  }

  handleError(hata:HttpErrorResponse){
    let erroroMessage=""
    if(hata.error instanceof ErrorEvent){
      erroroMessage = "Bir hata oluştu "+hata.error.message
    }else{
      erroroMessage = "Sistemsel bir hata"
    }

    return throwError(()=>new Error(erroroMessage));
  }
}
