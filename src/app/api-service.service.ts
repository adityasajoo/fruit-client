import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  img='https://m3placement.com/wp-content/uploads/2021/03/image-placeholder-350x350-1.png'
 url ="http:localhost:3000/"


  constructor(private http:HttpClient) { }

public fetchResults(body:any):Observable<any>{
  return this.http.post(this.url,body)
}

}
