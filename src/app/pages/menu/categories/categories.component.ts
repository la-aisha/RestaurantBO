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
  file64 : any ;
  imagePath : any
  imageSrc: string = '';

  //cat : any ;
  /* ---add edit-- */
  submitted = false ;
  edited: boolean = false ;
  currentCat : number =0;
  titleModal = " Add" || "Edit"
  formCat = new FormGroup({
    description : new FormControl(),
   //file : new FormControl(),
    libelle : new FormControl(),


  })

  

  
  constructor(private catService : CategorieService , private http : HttpClient ,private _sanitizer: DomSanitizer) {
    //console.log(this.photoFile(event));
    
   }

  ngOnInit(): void {
    //this.getCategories();
      
    console.log('--------success of get all cat--------');
    console.log(this.getCategories());
  
  
  }
  keyValuespair(group : FormGroup) : void{
    console.log(Object.keys(group.controls));
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
/* ---- submit edit cat---- */
onSubmit() {
  if(this.edited == false){
  
    
   
    const httpOptions = {
    transformRequest :'angular.identity' ,

    headers: new HttpHeaders({
      //'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>' ,
      'accept': 'application/json'


    })

  
    };

 

    
     let formData = new FormData();
     const uploadData = new FormData();
     
     //formData = this.formCat.value ;
     
     //formData.append('file', this.formCat.value.file);
      formData.append('description', this.formCat.value.description);
      formData.append('libelle', this.formCat.value.libelle);


   
     /*  for (var pair of Object.keys(this.formCat.controls)){
        console.log("les pairs" ,pair) ;
      }
 */
      //this.keyValuespair(this.formCat)
      var fd  : any = [];
      fd = formData;

      console.table(Object.fromEntries(fd));


      console.log("form data" , formData.get('file')?.valueOf());
      console.log("form data" , formData.get('libelle')?.valueOf());
      console.log("form data" , formData.get('description')?.valueOf());

    /*   formData.forEach((res : any =[])=>{
        this.formD = res
        console.log( "la valeur du call back", res);
        const json = JSON.stringify(this)


      } )   */


  
      
     /* var object: any= {};
     formData.forEach(function(value, key){
         object[key] = value;
     });
     var result=  JSON.stringify(object); */

     //console.log("le result est", result);
    
    

      this.http.post("http://127.0.0.1:8000/api/categories",Object.fromEntries(fd))
    .subscribe((res : any) => {
      console.log("valuee ---------" ,res) ;


    })
    
   
    //var data = JSON.parse(this.formCat.getRawValue()),
   /*  this.catService.AddCategorie(this.formCat.value).subscribe(
    post=>{ console.log("-----success post----", post)
    },
    error=>{console.log("----- couldnt post data---", error)}

    ) */
  }else{
    //edit categorie
    this.catService.UpdateCategorie(this.currentCat ,this.formCat.valid).subscribe(
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
/* 
//cat : any
setCatModif(cat : any){
  this.edited = true ;
  this.titleModal = "Edit";
  console.log("le cat de edit",cat);
  this.currentCat = cat.id ;
  this.formCat.setValue({
    libelle : cat.libelle,
    description : cat.description,
    file : cat.file

  })


    
} */


photoFile(event : any) {
   console.log("---event de file ",event);
  const file64 = event.target.files[0];
  const reader = new FileReader();
   
  reader.readAsDataURL(file64);
   reader.onload = () => {

    return console.log("le data image recu ",reader.result);
   /*  this.formCat.patchValue({
      file: reader.result,
    });   */
    //this.formCat.updateValueAndValidity();
   
  };

   reader.onload = this._handleReaderLoaded.bind(this);
  //reader.readAsDataURL(file64);
 
 
  let extensionAllowed: any = { "png": true, "jpeg": true , "jpg" : true , "webp" : true , "avif":true};
  let file = event.target.files[0];
  if (file.size / 1024 / 1024 > 20) {
    alert("File size should be less than 20MB")
    return;
  }
  if (extensionAllowed) {
    var nam = file.name.split('.').pop();
    if (!extensionAllowed[nam]) {
      alert("Please upload " + Object.keys(extensionAllowed) + " file.")
      return;
    }
  }
  //this.formCat.controls["file"].setValue(file);
  //let rest =   this.formCat.controls["file"].setValue(file);

  //console.log("test --------",rest) ;


 
 
}

_handleReaderLoaded(e : any) {
  let reader = e.target;
  this.imageSrc = reader.result;
  console.log("la valeur de image src",this.imageSrc) ;

  

  //this.formCat.value.file = this.imageSrc ;
  //this.formD.append('file',this.formCat.value.file);

  
}
 
}
