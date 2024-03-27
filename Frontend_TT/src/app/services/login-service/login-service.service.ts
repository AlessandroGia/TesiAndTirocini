import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private url = 'http://localhost:8080/api/v1/login';

  constructor(private http: HttpClient) { }

  login(nomeUtente: string, password: string): Observable<any>  {
    return this.http.post(this.url, {nomeUtente, password})
  }

}
