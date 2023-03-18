import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  verifyCode(code: any): Observable<any> {
    return this.http.get(`${this.apiUrl}` + `?serviceCode=${code}`);
  }

  verifyToken(token: any): Observable<any> {
    return this.http.get(`${this.apiUrl}` + `?get=${token}`);
  }
}
