import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(public api:ApiServiceService) { }

  ngOnInit(): void {
  }

}
