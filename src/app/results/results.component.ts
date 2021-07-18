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
    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "\o/";
      e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
      return confirmationMessage; // Gecko, WebKit, Chrome <34
    });
  }

  facts= ["Apples contain antioxidants, vitamin C, fiber, and several other nutrients that may boost heart, brain, and digestive health.",
  "Oranges are high in this important nutrient, which keeps your bones, organs, and muscles strong.",
"Potassium in bananas is good for your heart health and blood pressure"]


getQuotes(){
return this.facts[Math.floor(Math.random() * this.facts.length)];
}
}
