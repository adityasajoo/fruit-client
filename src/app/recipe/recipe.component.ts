import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  panelOpenState = false;
  public recipies:any = [];

  constructor(private searchServie:SearchService) {
    searchServie.searchResult.subscribe(val=>{
      if(val.data){
        for(var key of Object.keys(val.data)){
          this.recipies = [...this.recipies,...val.data[key]];

        }
        console.log(this.recipies);
      }
      console.log(val);
    })
   }

  ngOnInit(): void {
  }

}
