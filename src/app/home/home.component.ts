import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from 'src/app/api-service.service'
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
succ=false
sendFile :any
  constructor(public api:ApiServiceService) { }
files:any
  @ViewChild('imageInput') fileInput:any;

  inputChange(event:any){
    

    console.log(event.target.files[0]);
    if(event.target.files){
      var reader = new FileReader();
      reader.onload=(event:any)=>{
        this.succ=true
        this.api.img = event.target.result;
       

      }
    reader.readAsDataURL(event.target.files[0])
    this.api.fetchResults({file:event.target.files}).subscribe(res =>{
      console.log(res);
    })


    }
  }

onSubmit(){

  this.api.fetchResults(this.files)
}

  ngOnInit(): void {
    this.api.welcome().subscribe(result=>{
      console.log("Result ",result);
    })
  }



}
