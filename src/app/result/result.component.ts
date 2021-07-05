import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  loader=false

  img = 'https://m3placement.com/wp-content/uploads/2021/03/image-placeholder-350x350-1.png'
  public isLoading:any;
  constructor(private api: ApiServiceService,private router:Router) { 
    api.loading.subscribe(val => val === null ? this.router.navigateByUrl("/") : this.isLoading = val)
  }

  res: any
  inpImage = ''
  resultant = []

  facts= ["Apples contain antioxidants, vitamin C, fiber, and several other nutrients that may boost heart, brain, and digestive health.",
          "Oranges are high in this important nutrient, which keeps your bones, organs, and muscles strong.",
        "Potassium in bananas is good for your heart health and blood pressure"]


getQuotes(){
  return this.facts[Math.floor(Math.random() * this.facts.length)];
}

pictures:any
readImg(img:any){
  return img
 }

  ngOnInit(): void {

    this.api.reciever().subscribe(x => {
      const res = x.data

      this.inpImage = res.input_image
      this.pictures = res.predicted

      console.log(res,"res")
    })

    //copied
    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "\o/";
      e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
      return confirmationMessage; // Gecko, WebKit, Chrome <34
    });

  }





}
