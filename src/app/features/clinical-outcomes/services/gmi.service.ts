import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GmiService {
  private apiUrl = '/api/gmi';

  constructor(private http: HttpClient) {}

  getGmiData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
