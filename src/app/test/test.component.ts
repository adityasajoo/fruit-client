import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public ELEMENT_DATA: any[] = [
    {fruit: "Fresh Apple", calories: '89', carbs: "22.8g", protein: "1.1g",fiber:'2g'},
    // {fruit: "Fresh Apple", calories: '89', carbs: "22.8g", protein: "1.1g",fiber:'2g'},
    // {fruit: "Fresh Apple", calories: '89', carbs: "22.8g", protein: "1.1g",fiber:'2g'},
    // {fruit: "Fresh Apple", calories: '89', carbs: "22.8g", protein: "1.1g",fiber:'2g'},
    // {fruit: "Fresh Apple", calories: '89', carbs: "22.8g", protein: "1.1g",fiber:'2g'},
    // {fruit: "Fresh Apple", calories: '89', carbs: "22.8g", protein: "1.1g",fiber:'2g'},
  ];

  public HOPCOM_DATA: any[] = [
    {fruit: "Fresh Apple", price:"280"},
    {fruit: "Fresh Apple", price:"280"},
    {fruit: "Fresh Apple", price:"280"},
    {fruit: "Fresh Apple", price:"280"},
  ];

  public displayedColumns: string[] = ['fruit', 'calories', 'carbs', 'protein','fiber'];
  public hopcomHeader:string[] =['fruit','price'];
  public dataSource = this.ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}
