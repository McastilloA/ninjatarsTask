import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { tokenInterface } from '../models/interfaceToken';
import { tokenBearer } from '../models/interfaceToken';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  EndpointApiOauth = environment.EndpointOauth;

  constructor(private httpClient: HttpClient) {}
    headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });


  login(grant_type: string, client_id: number, client_secret: string, username:string, password:string): Observable<any> {
    return this.httpClient.post<tokenInterface>(this.EndpointApiOauth, { grant_type, client_id, client_secret, username, password })
    .pipe(map(data => data));
  }

  setUser(dataToken: tokenBearer): void{
    let user_string = JSON.stringify(dataToken);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void{
    localStorage.setItem("accessToken", token);
  }

  getToken(){
    return localStorage.getItem("accessToken");
  }


}
