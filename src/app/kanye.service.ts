import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KanyeService {

  constructor(private _http: HttpClient) { }

  kanyeUrl = `https://api.kanye.rest/`;

  getKanye():Observable<any> {
    return this._http.get(this.kanyeUrl);
  }
}


