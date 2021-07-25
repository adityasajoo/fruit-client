import { Component } from '@angular/core';
import { ApiServiceService } from './service/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FruitGrading';
  constructor(private api:ApiServiceService){
    this.api.checkConnection().subscribe(res=>{
      if(res.status=="success") this.api.connection.next(true);
    })
  }

}
