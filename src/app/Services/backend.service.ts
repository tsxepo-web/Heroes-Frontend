import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private backendUrl = 'https://battlehero.azurewebsites.net/api/Battle';

  constructor(private http: HttpClient) { }

  getBattles(): Observable<any[]> {
    return this.http.get<any[]>(this.backendUrl);
  }

  createBattle(battleData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(this.backendUrl, battleData, httpOptions);
  }
}
