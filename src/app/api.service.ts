import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
apiUrl : string = "http://192.168.2.33:4000/demo/getCred"
  constructor(private httpClient: HttpClient) { }

//   public login(reqObj): Observable<any> {
//     //console.log(reqObj)
//     return this.httpClient.post(this.apiUrl, reqObj,{
//       //headers : new HttpHeaders().set('Content-Type', 'application/json')
//     }).map(data => data);
// }


login(reqObj): Observable<any> {
  return this.httpClient.post(this.apiUrl,reqObj, {
    headers: new HttpHeaders().set('Accept', 'application/json')
      .set('Content-Type', 'application/json'),
  })
    .map((response) => response)
    .catch(error => {
      return Observable.throw('An error occurred')
    });
}
}
