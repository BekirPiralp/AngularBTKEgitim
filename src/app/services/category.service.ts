import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable,throwError } from 'rxjs';
import { tap,catchError} from 'rxjs/operators';

@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/categories";

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.path).pipe(
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
