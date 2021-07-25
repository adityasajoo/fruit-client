import { Injectable } from '@angular/core';
import { Observable,EMPTY, of,BehaviorSubject, ReplaySubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, retry, shareReplay} from "rxjs/operators";

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  img='https://m3placement.com/wp-content/uploads/2021/03/image-placeholder-350x350-1.png'
  // url ="http://localhost:5000"
  url = "https://flask-server.loca.lt/"

  connection = new BehaviorSubject<any>(false)
 
private apiSubject = new ReplaySubject<any>()
public loading = new BehaviorSubject<any>(null);
public result = new BehaviorSubject<any>({});  

  constructor(private http:HttpClient) { 
    
  }

public fetchResults(files:any):Observable<any>{
  const formdata = new FormData()
  formdata.append('file',files,files.name)
  formdata.append('model','inceptionV3.h5')

  let sendUrl = `${this.url}/predict`
  return this.http.post(sendUrl,formdata)
}

checkConnection():Observable<any>{
  return this.http.get(this.url,httpOptions).pipe(
    retry  (3),
    catchError(()=>{
      return EMPTY;
    }),
    shareReplay()
  );
}

public sendData(msg:any){
 this.apiSubject.next(msg)
}


public reciever():Observable<any>{
  return  this.apiSubject.asObservable()
}



public sendLocation(body:any){
  
  return this.http.get(`https://flask-server.loca.lt/location?lat=${body.lat}&long=${body.long}`)
}

}
