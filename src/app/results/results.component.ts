import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public isLoading=true;
  public result : any;

  constructor(apiService:ApiServiceService,router:Router) { 
    //check if data fetched
    apiService.loading.subscribe(val => val===null?router.navigateByUrl("/home"):this.isLoading=val);

    //subscribe to result
    apiService.result.subscribe(val=>{
      if(val.data){
        this.result = val.data;
      }
      console.log(val);
    })
  
  }

  ngOnInit(): void {
  }

}
