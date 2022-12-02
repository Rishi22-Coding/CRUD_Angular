import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestapiService {
  constructor(private http: HttpClient) { }
  postConcourseDetail(data: any){
    return this.http.post<any>("http://localhost:3000/posts/", data);
  }
  getConcourseDetail(){
    return this.http.get<any>("http://localhost:3000/posts/");
  }
  updateConcourse(data: any, id: any){
    return this.http.put<any>("http://localhost:3000/posts/"+id, data);
  }
  deleteConcourse(id: any){
    return this.http.delete<any>("http://localhost:3000/posts/"+id);
  }
}
