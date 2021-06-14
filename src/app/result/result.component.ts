import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  img='https://m3placement.com/wp-content/uploads/2021/03/image-placeholder-350x350-1.png'
  constructor(private api:ApiServiceService) { }
res:any
  ngOnInit(): void {

    this.api.reciever().subscribe(x=>{
 this.img=x
    })


  }

}
