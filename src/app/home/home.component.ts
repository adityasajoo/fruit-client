import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from 'src/app/service/api-service.service'
import { ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
succ=false
sendFile :any
  constructor(private api:ApiServiceService,private router:Router,private _snackBar: MatSnackBar) { }
files:any
// img='https://m3placement.com/wp-content/uploads/2021/03/image-placeholder-350x350-1.png'
img='https://i.pinimg.com/originals/ba/d6/66/bad666ef68eaffcf6d5b6d607751d337.jpg'
subs= new Subscription()

  @ViewChild('imageInput') fileInput:any;

  inputChange(event:any){

    console.log(event.target.files[0]);
    if(event.target.files){
      var reader = new FileReader();
      reader.onload=(event:any)=>{
        this.succ=true
        this.img = event.target.result;

      }
      this.sendFile = event.target.files[0]
    reader.readAsDataURL(this.sendFile)
    }
  }

onSubmit(){
  if(this.succ){
    this.api.loading.next(true);
    this.api.fetchResults(this.sendFile).subscribe(result=>{
      this.api.result.next(result);
      this.api.loading.next(false);
    })
   this.router.navigateByUrl("/results")
  }else{
      this._snackBar.open("Please upload an image to continue",'',{
        duration:4000,
        horizontalPosition: 'center',
      verticalPosition: 'top',
      });
  }

}




  ngOnInit(): void {
    // this.api.welcome().subscribe(result=>{
    //   console.log("Result ",result);
    // })

 this.subs= this.api.reciever().subscribe(x=>{
      this.img=x
         })

      
  }

ngOnDestroy(){
this.subs.unsubscribe()
}

getImage(){
  
  return 'assets/orange.png'
}


}
