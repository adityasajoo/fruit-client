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

  img = 'https://m3placement.com/wp-content/uploads/2021/03/image-placeholder-350x350-1.png'
  public isLoading:any;
  constructor(private api: ApiServiceService,private router:Router) { 
    api.loading.subscribe(val => val === null ? this.router.navigateByUrl("/") : this.isLoading = val)
  }

  res: any
  ngOnInit(): void {

    this.api.reciever().subscribe(x => {
      this.img = x
    })

    //copied
    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "\o/";
      console.log("cond");
      e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
      return confirmationMessage; // Gecko, WebKit, Chrome <34
    });

  }




}
