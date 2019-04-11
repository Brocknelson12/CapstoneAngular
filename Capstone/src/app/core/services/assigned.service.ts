import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { Assigned } from 'src/app/objects/assigned/assigned';

@Injectable({
  providedIn: 'root'
})
export class AssignedService {

  constructor(private _http : HttpClient) {

   }

   getAssigned():Observable<any> {
    return this._http.get("https://localhost:5001/api/assigned")
    .pipe(map(data => data.valueOf()));
  }

   addAssigned(assigned: Assigned):Observable<any> {
    return this._http.post("https://localhost:5001/api/assigned",assigned)
  }
}
