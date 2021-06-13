import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from 'src/app/api-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
succ=false
  constructor(public api:ApiServiceService) { }



  inputChange(event:any){
    if(event.target.files){
      var reader = new FileReader();
      reader.onload=(event:any)=>{
        this.succ=true
        this.api.url = event.target.result;
      }
reader.readAsDataURL(event.target.files[0])
    }
  }



  ngOnInit(): void {
  }

}
