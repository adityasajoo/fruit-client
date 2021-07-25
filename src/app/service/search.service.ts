import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';
import { mapFruit } from 'src/utils/helper';
import {
  ApiServiceService
} from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public fruits = new BehaviorSubject({});
  public searchResult = new BehaviorSubject<any>({});
  // private url = "http://localhost:3000";
  url = "https://fruit-search-engine.herokuapp.com"


  constructor(private http: HttpClient, private apiService: ApiServiceService) {
    apiService.result.subscribe(val => {
      console.log(val,"receipe")
      if (val.data) {
        this.fruits = val.data.fruits;
        //for recipies
        let str = '';
        this.fruits.forEach(item =>
          str = str + 'fruits=' + mapFruit(item) + '&'
        )
        this.searchRecipes(str).subscribe(val => {
          this.searchResult.next(val);
        })


      }
    })
  }

  public searchRecipes(str: any): Observable<any> {
    return this.http.get(`${this.url}/recommend/api/v2?${str}`)
  }


  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }



}