import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConcourcedataService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(
      'http://192.168.1.29:89/api/concoursedatas'
    );
  }
}
