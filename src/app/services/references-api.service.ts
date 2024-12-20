import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReferencesApiService {
  private apiUrl = 'http://localhost:1337/api/references'; // URL zur Strapi-API

  constructor(private http: HttpClient) {}

  getReferences(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
