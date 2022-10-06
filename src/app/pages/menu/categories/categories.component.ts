import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  ReactiveFormsModule } from '@angular/forms';
import { CategorieService } from 'src/app/service/categorie.service';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  formD : [] = [];
  categories : any ;
  searchText : string = '' ;
  p: number = 1 ;
  file : any ;
  file64 : any ;
  image : any
  imageSrc: string = '';
  submitted = false ;
  edited: boolean = false ;
  currentCat : number =0;
  titleModal = "Add" || "Edit"
  formCat = new FormGroup({
    description : new FormControl(),
    file : new FormControl(),
    libelle : new FormControl(),
    //image : new FormControl(),
  })
  constructor(private catService : CategorieService , private http : HttpClient ,private _sanitizer: DomSanitizer) {
  
  }


  ngOnInit(): void {  
    console.log('--------success of get all cat--------');
    console.log(this.getCategories());
  }


/* -----sort event -------- */
key  = 'id';
reverse : boolean = false ;
sort(key : string){
  this.key = key ;
  this.reverse = !this.reverse ;
}

/* ---- get al categories */
  getCategories(){
    return this.catService.GetCategories().subscribe((res: any ) => {
    this.categories= res;
    console.log(res);
    console.log("valeur de catarray");
    }, error=> {
      console.log("------ error", error);
    }
    ); 
  }

//cat : any
setCatModif(cat : any){
  this.edited = true ;
  this.titleModal = "Edit";
  console.log("le cat de edit",cat);
  this.currentCat = cat.id ;
  this.formCat.setValue({
    description: cat.description,
    file: cat.file,
    libelle: cat.libelle,
    //image: cat.libelle
  })  
    
} 
/* ---- submit edit cat---- */
onSubmit() {
  let formData = new FormData();
  formData.append('description',this.formCat.value.description);
  formData.append('libelle', this.formCat.value.libelle);
  formData.append('file', this.file as any);
  console.table(Object.fromEntries(formData as any));

  if(this.edited == false){
   
    this.catService.AddCategorie(formData).subscribe( 
    post=> console.table(post),
    error=> console.error("---- couldnt post data" , error) ) 
    

  }else{
    //edit categorie
    this.catService.UpdateCategorie(this.currentCat ,formData).subscribe(
    post=>{ console.log("-----success edit----", post)
    this.edited = false;
    this.titleModal = "Add";
    },
    error=>{console.log("----- couldnt edit data---", error)
    this.edited = false;
    this.titleModal = "Add";
    })
  
  }


}

/* ------- delete cat--------- */

delCat(id : any){

  this.catService.DeleteCategorie(id).subscribe((res : any) =>{
    this.getCategories();

  })

}


photoFile(event : any) {
   //console.log("---event de file ",event);
  const file64 = event.target.files[0].name;
  const reader = new FileReader();
  this.file = event.target.files[0];
  this.formCat.value.file = file64;

  console.log(this.formCat.value.file)

  

   
   reader.readAsDataURL(this.file);
   reader.onload = () => {
   console.log("le data image recu ",reader.result);
   console.log("le file path",this.file)
  // this.formCat.value.image = reader.result ;
   //console.log("valeur de 'image", this.formCat.value.image)

   
   this.formCat.value.file = reader.result;
    this.imageSrc = this.formCat.value.file ;
    ;

  
  }; 

   //reader.onload = this._handleReaderLoaded.bind(this);
 
 
  let extensionAllowed: any = { "png": true, "jpeg": true , "jpg" : true , "webp" : true , "avif":true};
  if (this.file.size / 1024 / 1024 > 20) {
    alert("File size should be less than 20MB")
    return;
  }
  if (extensionAllowed) {
    var nam = this.file.name.split('.').pop();
    if (!extensionAllowed[nam]) {
      alert("Please upload " + Object.keys(extensionAllowed) + " file.")
      return;
    }
  }



 
 
}

  
}
