import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private httpclient: HttpClient){
  }

  getProducts(): Observable<any>{
    return this.httpclient.get<any>('http://localhost:5160/api/products', this.getToken());
  }

  loginUser(data: any): Observable<any>{
    return this.httpclient.post('http://localhost:5160/api/token', data).pipe(
      catchError(error => {
        if (error.status === 400) {
          console.error('Bad Request:', error.error);
          return of(error);
        } else {
          throw error;
        }
      })
    );
  }

  registerUser(data: any): Observable<any>{
    return this.httpclient.post('http://localhost:5160/api/userinfo', data).pipe(
      catchError(error => {
        if (error.status === 400) {
          console.error('Bad Request:', error.error);
          return of(error);
        } else {
          throw error;
        }
      })
    );
  }

  getToken(): any{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        })
      };
    }

    return httpOptions;
  }
}
