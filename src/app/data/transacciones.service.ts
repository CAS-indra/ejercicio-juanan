import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  private readonly urlBase = 'https://proton-angular-builders.herokuapp.com/v1/transactions';

  constructor(private http: HttpClient) {}

  public getTransacciones$(): Observable<any[]> {
    return this.http.get<any>(this.urlBase).pipe(map(res => res.data));
  }

  public getTransaccionesById$(id: string): Observable<any> {
    return this.http.get<any>(this.urlBase + id).pipe(map(res => res.data));
  }
}
