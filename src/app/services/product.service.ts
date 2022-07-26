import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products";
  //
  getProducts(categoryId: any): Observable<Product[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath += "?categoryId=" + categoryId
    }

    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))), //loglama
      catchError(this.handleError) // hata ayıklama
    );
  }

  handleError(hata: HttpErrorResponse) {
    let erroroMessage = ""
    if (hata.error instanceof ErrorEvent) {
      erroroMessage = "Bir hata oluştu " + hata.error.message
    } else {
      erroroMessage = "Sistemsel bir hata"
    }

    return throwError(() => new Error(erroroMessage));
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'//şuan ,için bunun bir anlamı yok 
      })
    }
    return this.http.post<Product>(this.path, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
}
