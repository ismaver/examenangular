import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from 'src/environment/environments';

@Injectable({
  providedIn: 'root'
})
export class RecargaService {
  private apiUrl = `${environments.WS_PATH}/recargas`; // Ajusta el endpoint si es necesario

  constructor(private http: HttpClient) { }

  realizarRecarga(datosRecarga: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, datosRecarga);
  }
}
