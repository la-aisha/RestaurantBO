import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subscription } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl : string ;
  constructor( private http : HttpClient) {
    this.apiUrl = 'http://127.0.0.1:8000/api';

  }
/* ---- get all categories */
  GetCategories(){
    const url = `${this.apiUrl}/${environment.apiEndpoints.categorie}`;
    return this.http.get(url);
  }
}
