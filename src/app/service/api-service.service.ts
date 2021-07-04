import { Injectable } from '@angular/core';
import { Observable,from, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  img='https://m3placement.com/wp-content/uploads/2021/03/image-placeholder-350x350-1.png'
  url ="http://localhost:5000"
 
private apiSubject = new ReplaySubject<any>()
public loading = new BehaviorSubject(null);
  

  constructor(private http:HttpClient) { 
    
  }

public fetchResults(files:any):Observable<any>{
 
  const formdata = new FormData()
  formdata.append('file',files,files.name)
  formdata.append('model','inceptionV3.h5')

  let sendUrl = `${this.url}/predict`
  return this.http.post(sendUrl,formdata)
}

  public welcome():Observable<any>{
    return this.http.get(this.url);
  }


public sendData(msg:any){
 this.apiSubject.next(msg)
}


public reciever():Observable<any>{
  return  this.apiSubject.asObservable()
}

}
