import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories : any ;
  constructor(private catService : CategorieService , private http : HttpClient) {
    //this.categories = [];
    //console.log("------get all categories");
    //console.log(this.getCategories());
   }

  ngOnInit(): void {
    this.getCategories();
    //console.log(this.categories);

  }

  getCategories(){
    //return this.http.get("http://127.0.0.1:8000/api/categories").subscribe((res ) => {
    return this.catService.GetCategories().subscribe((res: any ) => {
    
    //this.categories= JSON.parse(res);
    this.categories= res;
    console.log(res);

    }, error=> {
      console.log("------ error", error);
    }
    ); 
  }

}
