import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  readonly apiUrl = 'https://localhost:7003/api/';
  constructor(private http: HttpClient) {}

  getActionInfo(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7003/api/actionreport');
  }
}
