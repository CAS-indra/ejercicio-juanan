import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  private readonly urlBase = environment.apiUrl + 'transactions/';

  constructor(private http: HttpClient) {}

  public postTransacciones$(transaccion: any): Observable<any> {
    return this.http.post<any>(this.urlBase, transaccion).pipe(map(res => res.data));
  }

  public getTransacciones$(): Observable<any[]> {
    return this.http.get<any>(this.urlBase).pipe(map(res => res.data));
  }

  public getTransaccionesById$(id: string): Observable<any> {
    return this.http.get<any>(this.urlBase + id).pipe(map(res => res.data));
  }

  public putTransacciones$(transaccion: any): Observable<any> {
    return this.http.put<any>(this.urlBase + transaccion.id, transaccion).pipe(map(res => res.data));
  }

  public deleteTransaccionesById$(id: string): Observable<void> {
    return this.http.delete<void>(this.urlBase + id);
  }
}
