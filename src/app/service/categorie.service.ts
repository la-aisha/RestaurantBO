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

  /* ---- get all categories ---- */
  GetCategories(){
    const url = `${environment.API_URL}/${environment.apiEndpoints.categorie}`;
    return this.http.get(url);
  }
  /* ---- get all categories ---- */
   AddCategorie(data : any ){
    const url = `${environment.API_URL}/${environment.apiEndpoints.categorie}`;
    return this.http.post(url,data);
  }
  /* ---- update categories ---- */
   UpdateCategorie(id : number ,data : any){
    const url = `${environment.API_URL}/${environment.apiEndpoints.categorie}/${id}`;
    return this.http.put(url,data);
  }
  /* ---- delete categories ---- */
  DeleteCategorie(id: number): Observable<any> {
    const url = `${environment.API_URL}/${environment.apiEndpoints.categorie}/${id}`;
    return this.http.delete(url);
  }
}
