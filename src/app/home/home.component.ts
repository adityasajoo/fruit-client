import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from 'src/app/service/api-service.service'
import { ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
succ=false
sendFile :any
  constructor(private api:ApiServiceService) { }
files:any
img='https://m3placement.com/wp-content/uploads/2021/03/image-placeholder-350x350-1.png'
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
    // this.api.fetchResults({file:event.target.files}).subscribe(res =>{
    //   console.log(res);
    // })


    }
  }

onSubmit(){

  this.api.fetchResults(this.sendFile).subscribe(result=>{
    console.log(result);
  })
  this.api.sendData(this.img)
}

  ngOnInit(): void {
    this.api.welcome().subscribe(result=>{
      console.log("Result ",result);
    })


 this.subs= this.api.reciever().subscribe(x=>{
      this.img=x
         })

      
  }

ngOnDestroy(){
this.subs.unsubscribe()
}

}
